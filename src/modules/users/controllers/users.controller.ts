import { Post, UsePipes, ValidationPipe, Delete, Param, Controller, Body, Get } from "@nestjs/common";
import { UserDto } from "../dto/user.dto";
import { UsersService } from "../services/users.service";
import { User } from "../entities/user.entity";

@Controller('users')
export class UsersController{
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() userDto: UserDto){
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
    async delete(@Param('username') username: string){
        await this.usersService.delete(username);
    }
}