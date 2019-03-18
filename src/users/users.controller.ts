import { Controller, Get, Post, ParseIntPipe, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async getAll(): Promise<User[]> {
        return await this.usersService.getAll();
    }

    @Get(':username')
    async getOneByName(@Param('username') username: string): Promise<User> {
        return await this.usersService.getOneByName(username);
    }
}