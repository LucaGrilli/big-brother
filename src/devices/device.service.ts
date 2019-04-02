import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Device } from "./device.entity";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { IPv4 } from "ip-num/IPv4";

@Injectable()
export class DevicesService {
    constructor (
        @InjectRepository(Device)
        private readonly deviceRepository: Repository<Device>,
    ) {}


    async create (deviceDto: CreateDeviceDto){
        const device = new Device(
           new IPv4(deviceDto.ip),
           deviceDto.macaddress,
            deviceDto.name,
        )
        await this.deviceRepository.insertOne(device);
    }

    async delete(id: number) {
        await this.deviceRepository.delete({
            id: id
        });

    }
    async getAll(): Promise<Device[]> {
        return await this.deviceRepository.find();
    }
}