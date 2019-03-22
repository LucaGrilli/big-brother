import { IsString, IsEmail, IsPhoneNumber, IsNotEmpty, IsOptional, IsEnum, MaxLength } from 'class-validator';
import { Role } from '../enums/role.enum';

export class UserDto {

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  readonly username: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(100)
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  readonly fullname: string;

  @IsPhoneNumber("IT")
  @IsOptional()
  readonly phone: number;

  @IsEnum(Role)
  readonly role: Role;
}