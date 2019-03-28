import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('grups')
export class Group {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: "varchar",
        length: 50,
        unique: true,
    })
    public name: string;
}