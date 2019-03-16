import { Controller, Get, Post, ParseIntPipe, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAll(): Promise<User[]> {
        return this.usersService.getAll();
    }

    @Get(':name')
    getOneByName(@Param('name') name: string): Promise<User> {
        return this.usersService.getOneByName(name);
    }
}