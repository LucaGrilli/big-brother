import { IsString, IsEmail, IsAlpha, IsPhoneNumber, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
import { Role } from '../enums/role.enum';

export class UserDto {

  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly fullname: string;

  @IsPhoneNumber("IT")
  @IsOptional()
  readonly phone: number;

  @IsEnum(Role)
  readonly role: Role;
}