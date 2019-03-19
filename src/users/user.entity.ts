import { Entity, Column, ObjectIdColumn, ObjectID, Index } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column({ length: 50 })
    @IsNotEmpty()
    @Index({ unique: true })
    username: string;

    @Column({ length: 100 })
    @IsNotEmpty()
    @Index({unique: true})
    email: string;

    @Column({ length: 30 })
    firstname: string;
    
    @Column({ length: 30 })
    lastname: string;

    @Column()
    phone: number;

    constructor(username: string, email: string, firstname: string, lastname: string){
        this.username = username;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}