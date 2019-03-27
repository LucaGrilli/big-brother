import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Role } from "./roles.entity";
import { CreateRoleDto } from "./dto/create-role.dto";

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>,
    ) {}

    async create(roleDto: CreateRoleDto){
        await this.roleRepository.insert(new Role(
            roleDto.name,
            roleDto.level,
        ));
    }

    async delete(name: string){
        await this.roleRepository.delete({
            name: name
        })
    }
}