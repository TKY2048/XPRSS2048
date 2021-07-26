/* eslint-disable new-cap */
import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

export interface UserEntityI {
    id: number,
    username: string,
    password: string,
    roles: 'tenant' | 'landlord'
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    username: string;

    @Column({type: 'varchar'})
    password: string;

    @Column({type: 'varchar'})
    roles: string;
}
