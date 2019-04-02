import { Entity, ObjectIdColumn, ObjectID, Column, Index, PrimaryGeneratedColumn } from "typeorm";
import { IPv4 } from "ip-num/IPv4";

@Entity('devices')
export class Device {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ unique: true})
    @Index()
    public ip: IPv4;

    @Column()
    @Index({ unique: true})
    public macaddress: string;

    @Column()
    public name: string;

    
    constructor(ip: IPv4, macaddress: string, name: string){
        this.ip = ip
        this.macaddress = macaddress;
        this.name = name;
        
    }
}