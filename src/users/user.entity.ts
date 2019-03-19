import { Entity, Column, ObjectIdColumn, ObjectID, Index } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column({ length: 50 })
    @IsNotEmpty()
    @Index({ unique: true })
    name: string;

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

    constructor(name: string, email: string, firstname: string, lastname: string){
        this.name = name;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}