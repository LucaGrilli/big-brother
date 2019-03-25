import { MaxLength, IsNotEmpty, IsString, IsIP } from "class-validator";
import { IPv4 } from "ip-num/IPv4";

export class CreateDeviceDto {
    @IsIP()
    @IsNotEmpty()
    readonly ip: IPv4;
  
    @IsString()
    @IsNotEmpty()
    readonly macaddress: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    readonly name: string;
  
    
  }