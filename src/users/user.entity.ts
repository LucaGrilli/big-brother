import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column({ length: 30})
    nickName: string;

    @Column({ length: 50 })
    firstName: string;

    @Column({ length:50 })
    lastName: string;

    @Column({ length: 300})
    email: string;

    @Column()
    phone: number;
}