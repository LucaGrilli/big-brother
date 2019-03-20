import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
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
        await this.userRepository.insertOne(new User(
            createUserDto.username,
            createUserDto.email,
            createUserDto.fullname,
            createUserDto.phone,
        ));
    }
}