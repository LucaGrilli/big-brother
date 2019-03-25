import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository, ObjectID } from "typeorm";
import { Device } from "./device.entity";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { IPv4 } from "ip-num/IPv4";

@Injectable()
export class DevicesService {
    constructor (
        @InjectRepository(Device)
        private readonly deviceRepository: MongoRepository<Device>,
    ) {}


    async create (deviceDto: CreateDeviceDto){
        const device = new Device(
           new IPv4(deviceDto.ip),
           deviceDto.macaddress,
            deviceDto.name,
        )
        await this.deviceRepository.insertOne(device);
    }

    async delete(id: ObjectID) {
        await this.deviceRepository.delete({
            _id: id
        });

    }
    async getAny(): Promise<Device[]> {
        return await this.deviceRepository.find();
    }
}