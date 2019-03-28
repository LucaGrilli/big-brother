import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { Group } from './entities/group.entity';
import { GroupsController } from './controllers/groups.controller';
import { GroupsService } from './services/groups.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Group]),
    ],
    controllers: [
        UsersController,
        GroupsController,
    ],
    providers: [
        UsersService,
        GroupsService,
    ],
})
export class UsersModule {}
