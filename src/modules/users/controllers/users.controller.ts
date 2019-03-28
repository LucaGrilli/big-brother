import { Post, UsePipes, ValidationPipe, Delete, Param, Controller, Body } from "@nestjs/common";
import { UserDto } from "../dto/user.dto";
import { UsersService } from "../services/users.service";

@Controller('users')
export class UsersController{
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() userDto: UserDto){
        await this.usersService.create(userDto);
    }

    @Delete(':username')
    async delete(@Param('username') username: string){
        await this.usersService.delete(username);
    }
}