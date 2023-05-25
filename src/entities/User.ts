import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne } from 'typeorm';
import { Partido } from './Partido';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column({
        unique: true
    })
    email: string;

    @Column({
        default: false
    })
    isAdmin: boolean;

    @Column({
        default: true
    })
    isActive: boolean;
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    upadatedAt: Date;

    @ManyToOne(() => Partido, (partido) => partido.users)
    partido: Partido
}