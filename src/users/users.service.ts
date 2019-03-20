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
        return await this.userRepository.findOne();
    }

    async create(createUserDto: CreateUserDto){
        let user = new User();
        user.username = createUserDto._username;
        user.email = createUserDto._email;
        user.fullname = createUserDto._fullname;
        user.phone = createUserDto._phone;
        await this.userRepository.insertOne(user);
    }
}