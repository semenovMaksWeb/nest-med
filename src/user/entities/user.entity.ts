import { ReceptionEntity } from "src/reception/entities/reception.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    polis: string;

    @Column()
    fio: string;

    @Column()
    tlf: string;

    @Column({ default: false })
    doctor: boolean;

    @OneToMany(() => ReceptionEntity, (reception) => reception.id)
    reception: ReceptionEntity[]
}
