import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column({ length: 30})
    name: string;

    @Column({ length: 50 })
    firstname: string;

    @Column({ length:50 })
    lastname: string;

    @Column({ length: 300})
    email: string;

    @Column()
    phone: number;
}