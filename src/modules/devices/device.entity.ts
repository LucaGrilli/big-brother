import { Entity, ObjectIdColumn, ObjectID, Column, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity('devices')
export class Device {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ unique: true})
    @Index()
    public ip: string;

    @Column()
    @Index({ unique: true})
    public macaddress: string;

    @Column()
    public name: string;

    
    constructor(ip: string, macaddress: string, name: string){
        this.ip = ip
        this.macaddress = macaddress;
        this.name = name;
        
    }
}