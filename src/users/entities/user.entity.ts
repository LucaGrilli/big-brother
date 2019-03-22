import { Entity, Column, ObjectIdColumn, ObjectID, Index } from 'typeorm';
import { Role } from '../enums/role.enum';

@Entity('users')
export class User {
    @ObjectIdColumn()
    public _id: ObjectID;

    @Column()
    @Index({ unique: true})
    public username: string;

    @Column()
    @Index({ unique: true})
    public email: string;

    @Column()
    public fullname: string;

    @Column()
    public phone: number;

    @Column()
    public role: Role;
}