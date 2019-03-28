import { IsString, IsEmail, IsPhoneNumber, IsNotEmpty, IsOptional, IsEnum, MaxLength, IsMobilePhone } from 'class-validator';
import { Group } from '../entities/group.entity';

export class UserDto{
    @IsString()
    readonly username: string;

    @IsEmail()
    readonly email: string;

    @IsString()
    readonly fullname: string;

    @IsPhoneNumber("IT")
    @IsOptional()
    readonly phone: string;

    readonly groups: Group[];
}