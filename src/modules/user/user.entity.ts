import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', unique: true, length: 40, nullable: false})
    username: string;

    @Column({type: 'varchar', nullable: false})
    email: string;

    @Column({type: 'varchar', nullable: false})
    passowrd: string;

    @Column({type: 'varchar', default: 'ativo', length: 8})
    status: string;

    @Column({type: 'timestamp', name: 'created_at'})
    created_at: Date;

    @Column({type: 'timestamp', name: 'updated_at'})
    updated_at: Date;

}