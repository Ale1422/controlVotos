import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

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
}