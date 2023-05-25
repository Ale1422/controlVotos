import {BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
import { Mesa } from './Mesa';

@Entity()
export class Escuela extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    nombre: string;

    @Column({
        default: 0
    })
    sector: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    upadatedAt: Date;

    @OneToMany(() => Mesa, (mesa) => mesa.escuela)
    mesas: Mesa[]
}