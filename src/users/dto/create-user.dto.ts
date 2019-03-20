import { IsString, IsEmail, IsAlpha, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {

  @IsString()
  readonly _username: string;

  @IsEmail()
  readonly _email: string;

  @IsString()
  @IsAlpha()
  readonly _fullname: string;

  @IsPhoneNumber("IT")
  readonly _phone: number;
}