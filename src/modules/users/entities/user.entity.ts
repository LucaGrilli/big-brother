import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Group } from "./group.entity";

@Entity('Users')
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: "varchar",
        length: 50,
        unique: true,
    })
    public username: string;

    @Column({
        type: "varchar",
        length: 150,
        unique: true,
    })
    public email: string;

    @Column({
        type: "varchar",
        length: 150,
    })
    public fullname: string;

    @Column({
        type: "varchar",
        nullable: true,
    })
    public phone: string;

    @ManyToMany(() => Group)
    @JoinTable({
        name: "Users_Groups",
        joinColumn: {
        name: "user",
        referencedColumnName: "id"
    },
    inverseJoinColumn: {
        name: "group",
        referencedColumnName: "id"
    }
    })
    public groups: Group[];

    constructor(username: string, email: string, fullname: string, phone: string, groups: Group[]){
        this.username = username;
        this.email = email;
        this.fullname = fullname;
        this.phone = phone;
        this.groups = groups;
    }

}