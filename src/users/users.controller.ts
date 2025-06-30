import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')            // /users
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()              // GET /users?role='admin'
    findAll(@Query('role') role?: 'ADMIN' | 'USER') {
        return this.usersService.findAll(role);
    }


    @Get(':id')        // GET /users/:id
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id); // Convert id to number
    }

    @Post()
    create(@Body() user:{name : string , role : 'ADMIN' | 'USER'}) {
        return this.usersService.create(user);
    }

    @Patch(':id')        // PATCH /users/:id
    update(@Param('id', ParseIntPipe) id:number, @Body() userUpdate: {name?: string, role?: 'ADMIN' | 'USER'}){
        return this.usersService.update(id, userUpdate); // Convert id to number
    }

    @Delete(':id')       // DELETE /users/:id
    remove(@Param('id', ParseIntPipe) id: number) {
        // ParseIntPipe ensures id is a number
        // If id is not a number, it will throw an error
        // If you want to convert id to number manually, you can use +id
        return this.usersService.delete(id); // Convert id to number
    }

}
