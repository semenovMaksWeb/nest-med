import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("doctor")
export class DoctorEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    name: string;

    @Column()
    description: string;

    @Column()
    image: string;
}
