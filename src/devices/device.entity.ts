import { Entity, ObjectIdColumn, ObjectID, Column, Index } from "typeorm";
import { IPv4 } from "ip-num/IPv4";

@Entity('devices')
export class Device {
    @ObjectIdColumn()
    public _id: ObjectID;

    @Column()
    @Index({ unique: true})
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