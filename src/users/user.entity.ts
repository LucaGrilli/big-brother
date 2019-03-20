import { Entity, Column, ObjectIdColumn, ObjectID, Index } from 'typeorm';
import { IsNotEmpty, IsOptional, IsString, IsPhoneNumber, IsEmail, IsAlpha, MaxLength, IsMongoId } from 'class-validator';

@Entity()
export class User {
    @ObjectIdColumn()
    @IsMongoId()
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
    @MaxLength(100)
    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    fullname: string;

    @Column()
    @IsOptional()
    @IsPhoneNumber("IT")
    phone: number;

    constructor(username: string, email: string, fullname: string, phone: number){
        this.username = username;
        this.email = email;
        this.fullname = fullname;
        this.phone = phone;
    }
}