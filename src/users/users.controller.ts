import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity'
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() userDto: UserDto) {
        await this.usersService.create(userDto);
    }

    @Get()
    async getAll(): Promise<User[]> {
        return await this.usersService.getAll();
    }

    @Get(':username')
    async getOneByUsername(@Param('username') username: string): Promise<User> {
        return await this.usersService.getOneByUsername(username);
    }

    @Delete(':username')
    async delete(@Param('username') username: string) {
        await this.usersService.delete(username);
    }
}