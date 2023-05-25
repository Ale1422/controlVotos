import {BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
import { Mesa } from './Mesa';
import { Partido } from './Partido';
import { TipoVoto } from './TipoVoto';

@Entity()
export class Votos extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        default: 0
    })
    cantidad: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    upadatedAt: Date;

    @ManyToOne(() => Mesa, (mesa) => mesa.votos)
    mesa: Mesa

    @OneToOne(() => Partido, (partido) => partido.votos)
    partido: Partido

    @OneToOne(() => TipoVoto, (tipoVoto) => tipoVoto.votos)
    tipoVoto: TipoVoto
}