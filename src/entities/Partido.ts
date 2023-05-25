import {BaseEntity, Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
import { Votos } from './Votos';
import { User } from './User';

@Entity()
export class Partido extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column({
        default: 0
    })
    lista: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    upadatedAt: Date;

    @OneToOne(() => Votos, (votos) => votos.partido)
    votos: Votos

    @OneToMany(() => User, (user) => user.partido)
    users: User[]
}