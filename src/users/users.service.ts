import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./users.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}
    
    async getAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async getOneByName(name: string){
        return await this.userRepository.findOne({
            name: name,
        })
    }
}