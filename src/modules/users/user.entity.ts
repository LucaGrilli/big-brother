import { Entity, Column, Index, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Role } from '../roles/roles.entity'

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    @Index({ unique: true})
    public username: string;

    @Column()
    @Index({ unique: true})
    public email: string;

    @Column()
    public fullname: string;

    @Column({ nullable: true})
    public phone: number;

    @ManyToOne(() => Role)
    public role: Role;

    constructor(username: string, email: string, fullname: string, phone: number, role: Role){
        this.username = username;
        this.email = email;
        this.fullname = fullname;
        this.phone = phone;
        this.role = role;
    }
}