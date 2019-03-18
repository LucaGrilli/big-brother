import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column({ length: 100})
    name: string;

    @Column({ length: 300})
    email: string;

    @Column()
    phone: number;
}