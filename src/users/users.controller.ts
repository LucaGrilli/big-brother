import { Controller, Get, Post, ParseIntPipe, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAll(): Promise<User[]> {
        return this.usersService.getAll();
    }

    @Get(':id')
    getOneById(@Param('id', new ParseIntPipe()) id) {
        return this.usersService.getOneById(id);
    }

    @Get(':name')
    getOneByName(@Param('name') name){
        return this.usersService.getOneByName(name);
    }
}