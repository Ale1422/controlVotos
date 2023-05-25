import {BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
import { Escuela } from './Escuela';
import { Votos } from './Votos';

@Entity()
export class Mesa extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    nombre: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    upadatedAt: Date;

    @ManyToOne(() => Escuela, (escuela) => escuela.mesas)
    escuela: Escuela

    @OneToMany(() => Votos, (votos) => votos.mesa)
    votos: Votos[]
}