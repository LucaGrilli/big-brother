import { IsInt, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly nickName: string;

  @IsString()
  readonly email: string;
}