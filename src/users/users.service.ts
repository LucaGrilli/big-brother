import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { MongoRepository } from "typeorm";
import { UserDto } from "./dto/user.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: MongoRepository<User>,
    ) {}

    async create(userDto: UserDto){
        const user = new User();
        user.username = userDto.username;
        user.email = userDto.email;
        user.fullname = userDto.fullname;
        user.phone = userDto.phone;
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