import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')            // /users
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()              // GET /users?role='admin'
    findAll(@Query('role') role?: 'ADMIN' | 'USER') {
        return this.usersService.findAll(role);
    }


    @Get(':id')        // GET /users/:id
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id); // Convert id to number
    }

    @Post()
    create(@Body() user:{name : string , role : 'ADMIN' | 'USER'}) {
        return this.usersService.create(user);
    }

    @Patch(':id')        // PATCH /users/:id
    update(@Param('id') id:string, @Body() userUpdate: {name?: string, role?: 'ADMIN' | 'USER'}){
        return this.usersService.update(+id, userUpdate); // Convert id to number
    }

    @Delete(':id')       // DELETE /users/:id
    remove(@Param('id') id: string) {
        return this.usersService.delete(+id); // Convert id to number
    }

}
