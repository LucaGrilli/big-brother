import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column({
        length:30,
        unique: true,
    })
    name: string;

    @Column({
        length: 30,
        unique: true,
    })
    email: string;

    @Column({ length: 50 })
    firstname: string;

    @Column({ length: 50 })
    lastname: string;

    @Column({
        unique: true,
        nullable: true,
    })
    phone: number;

    constructor(name: string, email: string, firstname: string, lastname: string){
        this.name = name;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}