import { ReceptionEntity } from 'src/reception/entities/reception.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

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

    @OneToMany(() => ReceptionEntity, (reception) => reception.id)
    reception: ReceptionEntity[]
}
