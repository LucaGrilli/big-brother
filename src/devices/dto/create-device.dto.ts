import { MaxLength, IsNotEmpty, IsString } from "class-validator";
import { IPv4 } from "ip-num/IPv4";

export class CreateDeviceDto {

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