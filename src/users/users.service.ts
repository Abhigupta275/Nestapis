import { Injectable } from '@nestjs/common';

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

    create(user : {name : string , role : 'ADMIN' | 'USER'}) {
      const newUser = {
        id: this.users.length + 1,
        ...user
      };
      this.users.push(newUser);
      return newUser;
  }

  update(id: number, userUpdate: {name?: string, role?: 'ADMIN' | 'USER'}) {
    this.users = this.users.map(user => {
        if (user.id === id) {
            return { ...user, ...userUpdate };
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
