import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { UserDto } from "../dto/user.dto";

@Injectable()
export class UsersService{
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}

    async create(userDto: UserDto){
        await this.usersRepository.save(new User(
            userDto.username,
            userDto.email,
            userDto.fullname,
            userDto.phone,
            userDto.groups,
        ))
    }

    async delete(username: string){
        await this.usersRepository.delete({
            username: username,
        })
    }
}