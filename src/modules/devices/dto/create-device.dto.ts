import { IsString, IsIP } from "class-validator";

export class CreateDeviceDto {
    @IsIP()
    readonly ip: string;
  
    @IsString()
    readonly macaddress: string;
  
    @IsString()
    readonly name: string;
  
    
  }