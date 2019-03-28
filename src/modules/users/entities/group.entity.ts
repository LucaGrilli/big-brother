import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('GroupsT')
export class Group {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: "varchar",
        length: 50,
        unique: true,
    })
    public name: string;

    constructor(name: string){
        this.name = name;
    }
}