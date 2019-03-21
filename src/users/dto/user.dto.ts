import { IsString, IsEmail, IsAlpha, IsPhoneNumber } from 'class-validator';
import { Role } from '../enums/role.enum';

export class UserDto {

  @IsString()
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @IsAlpha()
  readonly fullname: string;

  @IsPhoneNumber("IT")
  readonly phone: number;

  readonly role: Role;
}