/* eslint-disable new-cap */
import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

export interface UserEntityI {
    id: number,
    username: string,
    password: string,
    roles: 'tenant' | 'landlord'
}

/**
 * @description - Application User schema
 */
@Entity()
export class User {
    @PrimaryGeneratedColumn({type: 'int'})
    id: number;

    @Column({type: 'char varying'})
    username: string;

    @Column()
    password: string;

    @Column()
    roles: string;
}
