import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevicesModule } from './modules/devices/devices.module';
import { UsersModule } from './modules/users/users.module';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    DevicesModule,
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
