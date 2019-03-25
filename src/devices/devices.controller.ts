import { Controller, Post, UsePipes, Body, ValidationPipe, Get, Delete, Param } from "@nestjs/common";
import { Device } from "./device.entity";
import { DevicesService } from "./device.service";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { ObjectID } from "typeorm";

@Controller('devices')
export class DevicesController {
    constructor(private readonly devicesService: DevicesService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() deviceDto: CreateDeviceDto) {
        await this.devicesService.create(deviceDto);
    }
    @Get()
    async getAny(): Promise<Device[]> {
        return await this.devicesService.getAny();
    }
    @Delete(':id')
    async delete(@Param('id') id: ObjectID) {
        await this.devicesService.delete(id);
    }
}
