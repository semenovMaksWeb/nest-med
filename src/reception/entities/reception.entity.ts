import { DoctorEntity } from "src/doctor/entities/doctor.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("reception")
export class ReceptionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => DoctorEntity, (doctor) => doctor.id)
    doctor: DoctorEntity

    @Column({ type: "date" })
    date: Date

    @Column({ type: "time" })
    time: Date
}
