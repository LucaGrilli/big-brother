import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Group } from "../entities/group.entity";
import { Repository } from "typeorm";
import { GroupDto } from "../dto/group.dto";

@Injectable()
export class GroupsService {
    constructor(
        @InjectRepository(Group)
        private readonly groupsRepository: Repository<Group>,
    ) {}

    async create(groupDto: GroupDto){
        await this.groupsRepository.save(new Group(
            groupDto.name,
            groupDto.writePerm,
            groupDto.readPerm,
            groupDto.updatePerm,
            groupDto.deletePerm,
        ));
    }

    async delete(groupname: string){
        await this.groupsRepository.delete({
            name: groupname
        });
    }
}