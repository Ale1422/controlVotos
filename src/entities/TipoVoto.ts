import {BaseEntity, Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
import { Votos } from './Votos';

@Entity()
export class TipoVoto extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        default: 0
    })
    nombre: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    upadatedAt: Date;

    @OneToOne(() => Votos, (votos) => votos.tipoVoto)
    votos: Votos
}