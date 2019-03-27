import { RolesService } from "./roles.service";
import { Post, UsePipes, ValidationPipe, Body, Controller, Delete, Param } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";

@Controller('roles')
export class RolesController{
    constructor(private readonly rolesService: RolesService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() roleDto: CreateRoleDto){
        await this.rolesService.create(roleDto);
    }

    @Delete(':name')
    async delete(@Param('name') name: string){
        await this.rolesService.delete(name);
    }
}