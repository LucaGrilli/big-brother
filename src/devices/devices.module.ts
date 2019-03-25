import { Module } from '@nestjs/common';
import { DevicesController } from './devices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Device } from './device.entity';
import { DevicesService } from './device.service';


@Module({
    imports: [TypeOrmModule.forFeature([Device])],
    providers: [DevicesService],
    controllers: [DevicesController],
})
export class DevicesModule {}
