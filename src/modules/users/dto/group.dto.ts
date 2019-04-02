import { IsString, IsBoolean } from "class-validator";

export class GroupDto {
    @IsString()
    readonly name: string;

    @IsBoolean()
    readonly writePerm: boolean;

    @IsBoolean()
    readonly readPerm: boolean; 

    @IsBoolean()
    readonly updatePerm: boolean; 
    
    @IsBoolean()
    readonly deletePerm: boolean; 
}