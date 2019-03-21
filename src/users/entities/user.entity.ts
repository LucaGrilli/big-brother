import { Entity, Column, ObjectIdColumn, ObjectID, Index } from 'typeorm';
import { IsOptional, IsString, IsPhoneNumber, IsEmail, IsAlpha, MaxLength, IsMongoId } from 'class-validator';
import { Role } from '../enums/role.enum';

@Entity('users')
export class User {
    @ObjectIdColumn()
    @IsMongoId()
    public _id: ObjectID;

    @Column()
    @Index({ unique: true})
    @MaxLength(30)
    @IsString()
    public username: string;

    @Column()
    @Index({ unique: true})
    @MaxLength(70)
    @IsEmail()
    public email: string;

    @Column()
    @MaxLength(100)
    @IsString()
    @IsAlpha()
    public fullname: string;

    @Column()
    @IsOptional()
    @IsPhoneNumber("IT")
    public phone: number;

    @Column()
    public role: Role;
}