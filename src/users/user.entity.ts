import { Entity, Column, ObjectIdColumn, ObjectID, Index } from 'typeorm';
import { IsNotEmpty, IsOptional, IsString, IsPhoneNumber, IsEmail, IsAlpha, MaxLength, IsMongoId } from 'class-validator';
import { HttpException, HttpStatus } from '@nestjs/common';

@Entity('users')
export class User {
    @ObjectIdColumn()
    @IsMongoId()
    public _id: ObjectID;
    
    private _username: string;
    private _email: string;
    private _fullname: string;
    private _phone: number;

    public get username(): string {
        return this._username;
    }

    public set username(username: string){
        if(username == null){
            throw new HttpException(
                'Username cannot be null',
                HttpStatus.BAD_REQUEST,
            );
        }
        this._username = username;
    }

    public get email(): string {
        return this._email;
    }

    public set email(email: string){
        if(email == null){
            throw new HttpException(
                'Email cannot be null',
                HttpStatus.BAD_REQUEST,
            );
        }
        this._email = email.toLowerCase();
    }

    public get fullname(): string {
        return this._fullname;
    }

    public set fullname(fullname: string){
        if(fullname == null){
            throw new HttpException(
                'Fullname cannot be null',
                HttpStatus.BAD_REQUEST,
            );
        }
        this._fullname = fullname;
    }

    public get phone(): number {
        return this._phone;
    }

    public set phone(phone: number){
        this._phone = phone;
    }
}