import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevicesModule } from './devices/devices.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, DevicesModule],
})
export class AppModule {}
