import { DoctorEntity } from "src/doctor/entities/doctor.entity";
import { UserEntity } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("reception")
export class ReceptionEntity {
    @PrimaryGeneratedColumn()
    id: number;
 
    @ManyToOne(() => DoctorEntity, (doctor) => doctor.id)
    doctor: DoctorEntity

    @ManyToOne(() => UserEntity, (user) => user.id)
    user: UserEntity

    @Column({ type: "date" })
    date: Date

    @Column({ type: "time" })
    time: Date
}
