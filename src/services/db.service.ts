import dotenv from 'dotenv';
dotenv.config();
import { DataSource } from 'typeorm';
import {User} from '../entities/User';
import {Escuela} from '../entities/Escuela';
import {Mesa} from '../entities/Mesa';
import {Votos} from '../entities/Votos';
import {TipoVoto} from '../entities/TipoVoto';
import {Partido} from '../entities/Partido';

const PORT_DB: number = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: PORT_DB,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    entities: [Escuela, Mesa, Votos, TipoVoto, Partido, User],
    synchronize: true,
    logging: false,
})