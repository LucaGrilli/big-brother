import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity'
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async getAll(): Promise<User[]> {
        return await this.usersService.getAll();
    }

    @Get(':username')
    async getOneByUsername(@Param('username') username: string): Promise<User> {
        return await this.usersService.getOneByUsername(username);
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto)  {
        await this.usersService.create(createUserDto);
    }
}