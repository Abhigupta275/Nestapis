import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// This service provides methods to manage users, including finding, creating, updating, and deleting users.

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            name: 'John Doe',
            role: 'ADMIN'
        },
        {
            id: 2,
            name: 'Jane Smith',
            role: 'USER'
        },
        {
            id: 3,
            name: 'Alice Johnson',
            role: 'USER'
        }
    ];

    findAll(role?: 'ADMIN' | 'USER') {
        if (role) {
            return this.users.filter(user => user.role === role);
        }
        return this.users;
    }

    findOne(id: number) {
        const user =  this.users.find(user => user.id === id);
        return user
    }

    create(createUserDto : CreateUserDto) {
      const newUser = {
        id: this.users.length + 1,
        ...createUserDto
      };
      this.users.push(newUser);
      return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map(user => {
        if (user.id === id) {
            return { ...user, ...updateUserDto };
        }
        return user;
    }
    );
    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter(user => user.id !== id);
    return removedUser;
  }
}
