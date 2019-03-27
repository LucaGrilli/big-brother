import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public level: number;

    constructor(name: string, level: number){
        this.name = name;
        this.level = level;
    }
}