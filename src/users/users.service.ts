import { Injectable, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}
    
    async getAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async getOneByName(username: string): Promise<User>{
        return await this.userRepository.findOne({
            name: username,
        })
    }

    async create(createUserDto: CreateUserDto){
        await this.userRepository.save(new User(
            createUserDto.name,
            createUserDto.email,
            createUserDto.firstname,
            createUserDto.lastname,
        ));
    }
}