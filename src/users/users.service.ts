import { Injectable } from "@nestjs/common";
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

    async create(userDto: CreateUserDto){
        const user = new User(
            userDto.username,
            userDto.email,
            userDto.fullname,
            userDto.phone,
            userDto.role
        )
        await this.userRepository.insert(user);
    }
    
    async getAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async getOneByUsername(username: string): Promise<User> {
        return await this.userRepository.findOne({
            username: username
        });
    }

    async delete(username: string) {
        await this.userRepository.delete({
            username: username
        });
    }
}