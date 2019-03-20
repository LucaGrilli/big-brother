import { Entity, Column, ObjectIdColumn, ObjectID, Index } from 'typeorm';
import { IsNotEmpty, IsOptional, IsString, IsPhoneNumber, IsEmail, IsAlpha, MaxLength, IsMongoId } from 'class-validator';
import { HttpException, HttpStatus } from '@nestjs/common';

@Entity()
export class User {
    @ObjectIdColumn()
    @IsMongoId()
    private _id: ObjectID;

    @Column()
    @IsNotEmpty()
    @MaxLength(30)
    @Index({ unique: true })
    @IsString()
    private _username: string;

    @Column()
    @IsNotEmpty()
    @MaxLength(100)
    @Index({unique: true})
    @IsEmail()
    private _email: string;

    @Column()
    @IsNotEmpty()
    @MaxLength(100)
    @IsString()
    @IsAlpha()
    private _fullname: string;

    @Column()
    @IsOptional()
    @IsPhoneNumber("IT")
    private _phone: number;

    get id(): ObjectID {
        return this._id;
    }

    get username(): string {
        return this._username;
    }

    set username(username: string){
        if(username == null){
            throw new HttpException(
                'Username cannot be null',
                HttpStatus.BAD_REQUEST,
            );
        }
        this._username = username;
    }

    get email(): string {
        return this._email;
    }

    set email(email: string){
        if(email == null){
            throw new HttpException(
                'Email cannot be null',
                HttpStatus.BAD_REQUEST,
            );
        }
        this._email = email.toLowerCase();
    }

    get fullname(): string {
        return this._fullname;
    }

    set fullname(fullname: string){
        if(fullname == null){
            throw new HttpException(
                'Fullname cannot be null',
                HttpStatus.BAD_REQUEST,
            );
        }
        this._fullname = fullname;
    }

    get phone(): number {
        return this._phone;
    }

    set phone(phone: number){
        this._phone = phone;
    }
}