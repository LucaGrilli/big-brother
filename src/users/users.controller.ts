import { Controller, Get, Post, ParseIntPipe, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity'
import { async } from 'rxjs/internal/scheduler/async';
import { request } from 'https';
import { CreateUserDto } from './dto/create-user.dto';

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

    @Post()
    async create(@Body() createUserDto: CreateUserDto)  {
        await this.usersService.create(createUserDto);
    }

        
}