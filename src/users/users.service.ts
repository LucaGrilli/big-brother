import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { MongoRepository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: MongoRepository<User>,
    ) {}

    async create(userDto: CreateUserDto){
        const user = new User();
        user.username = userDto.username;
        user.email = userDto.email;
        user.fullname = userDto.fullname;
        user.phone = userDto.phone;
        user.role = userDto.role;
        await this.userRepository.insertOne(user);
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