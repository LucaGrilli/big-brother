import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { MongoRepository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: MongoRepository<User>,
    ) {}
    
    async getAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async getOneByUsername(username: string): Promise<User>{
        return await this.userRepository.findOne({
            username: username,
        });
    }

    async create(createUserDto: CreateUserDto){
        const user = new User();
        user.username = createUserDto.username;
        user.email = createUserDto.email;
        user.fullname = createUserDto.fullname;
        user.phone = createUserDto.phone;
        await this.userRepository.insertOne(new User());
    }
}