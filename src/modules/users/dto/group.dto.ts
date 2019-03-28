import { IsString } from "class-validator";

export class GroupDto {
    @IsString()
    readonly name: string;
}