import { Controller, Post, UsePipes, Body, ValidationPipe, Get } from "@nestjs/common";
import { Device } from "./device.entity";
import { DevicesService } from "./device.service";
import { CreateDeviceDto } from "./dto/create-device.dto";

@Controller('devices')
export class DevicesController {
    deviceService: any;
    constructor(private readonly DevicesService: DevicesService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() userDto: CreateDeviceDto) {
        await this.deviceService.create(userDto);
    }
    @Get()
    async getAny(): Promise<Device[]> {
        return await this.deviceService.getAny();
    }
}
