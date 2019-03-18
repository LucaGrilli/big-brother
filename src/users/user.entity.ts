import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column({ length: 300})
    email: string;

    @Column({ length: 100})
    username: string;

    @Column()
    phone: number;
}