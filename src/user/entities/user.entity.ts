import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
