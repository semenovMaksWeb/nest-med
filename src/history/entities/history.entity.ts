import { DoctorEntity } from "src/doctor/entities/doctor.entity";
import { UserEntity } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("history")
export class HistoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UserEntity, (user) => user.id)
    doctor: UserEntity

    @ManyToOne(() => UserEntity, (user) => user.id)
    user: UserEntity;

    @Column({ type: "date" })
    date: Date

    @Column({ type: "text" })
    text: string
}
