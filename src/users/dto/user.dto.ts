import { IsString, IsEmail, IsAlpha, IsPhoneNumber } from 'class-validator';

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
}