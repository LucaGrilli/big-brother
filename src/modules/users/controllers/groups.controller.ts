import { Controller, Post, UsePipes, ValidationPipe, Body, Delete, Param } from "@nestjs/common";
import { GroupDto } from "../dto/group.dto";
import { GroupsService } from "../services/groups.service";

@Controller('groups')
export class GroupsController {
    constructor(private readonly groupsService: GroupsService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() groupDto: GroupDto){
        await this.groupsService.create(groupDto);
    }

    @Delete(':groupname')
    async delete(@Param('groupname') groupname: string){
        await this.groupsService.delete(groupname);
    }
}