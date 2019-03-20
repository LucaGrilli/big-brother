import { IsInt, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly username: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly fullname: string;

  @IsInt()
  readonly phone: number;
}