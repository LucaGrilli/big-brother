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

    @Column({
        type: "boolean"
    })
    public writePerm: boolean;
    @Column({
        type: "boolean"
    })
    public readPerm: boolean; 
    @Column({
        type: "boolean"
    })
    public updatePerm: boolean; 
    @Column({
        type: "boolean"
    })
    public deletePerm: boolean; 

    constructor(name: string, writePerm: boolean, readPerm: boolean, updatePerm: boolean, deletePerm: boolean){
        this.name = name;
        this.writePerm = writePerm;
        this.readPerm = readPerm;
        this.updatePerm = updatePerm;
        this.deletePerm = deletePerm;
    }
}