import { Entity, Column, ObjectIdColumn, ObjectID, Index } from 'typeorm';
import { IsNotEmpty, IsOptional, IsString, IsPhoneNumber, IsEmail, IsAlpha, MaxLength } from 'class-validator';

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    @MaxLength(30)
    @IsNotEmpty()
    @Index({ unique: true })
    @IsString()
    username: string;

    @Column()
    @MaxLength(100)
    @IsNotEmpty()
    @Index({unique: true})
    @IsEmail()
    email: string;

    @Column()
    @MaxLength(30)
    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    firstname: string;

    @Column()
    @MaxLength(30)
    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    lastname: string;

    @Column()
    @IsOptional()
    @IsPhoneNumber("IT")
    phone: number;

    constructor(username: string, email: string, firstname: string, lastname: string){
        this.username = username;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}