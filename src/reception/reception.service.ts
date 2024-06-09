import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateReceptionDto } from './dto/create-reception.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ReceptionEntity } from './entities/reception.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ReceptionService {
  constructor(
    @InjectRepository(ReceptionEntity)
    private receptionRepository: Repository<ReceptionEntity>,
    private userSerivce: UserService
  ) {

  }
  async create(createReceptionDto: CreateReceptionDto) {
    const check = await this.findCheckReception(createReceptionDto.idDoctor, createReceptionDto.date, createReceptionDto.time);
    console.log(check.length);

    const user = await this.userSerivce.findPolis(createReceptionDto.polis);
    if (!user) {
      throw new HttpException('Пользователь не найден', HttpStatus.FORBIDDEN);
    }
    if (check.length !== 0) {
      throw new HttpException('Текущий врач занят на эту дату и время', HttpStatus.FORBIDDEN);
    }

    const elem = { ...createReceptionDto, idDoctor: undefined, doctor: { id: createReceptionDto.idDoctor }, user: { id: user.id } }
    return this.receptionRepository.save(elem);
  }

  async findDate(date: Date, doctorId: number) {
    const dateDefaultList = [
      { id: 1, time: "08:00:00", status: 0 },
      { id: 2, time: "08:30:00", status: 0 },

      { id: 3, time: "09:00:00", status: 0 },
      { id: 4, time: "09:30:00", status: 0 },

      { id: 5, time: "10:00:00", status: 0 },
      { id: 6, time: "10:30:00", status: 0 },

      { id: 7, time: "11:00:00", status: 0 },
      { id: 8, time: "11:30:00", status: 0 },

      { id: 9, time: "12:00:00", status: 0 },
      { id: 10, time: "12:30:00", status: 0 },

      { id: 11, time: "13:00:00", status: 0 },
      { id: 12, time: "13:30:00", status: 0 },

      { id: 13, time: "14:00:00", status: 0 },
      { id: 14, time: "14:30:00", status: 0 },

      { id: 15, time: "15:00:00", status: 0 },
      { id: 16, time: "15:30:00", status: 0 },

      { id: 17, time: "16:00:00", status: 0 },
      { id: 18, time: "16:30:00", status: 0 },
      { id: 19, time: "17:00:00", status: 0 },
    ]
    const data = await this.receptionRepository.find({
      select: { id: true, time: true, user: { id: true }, doctor: { id: false, description: false, image: false, reception: false, name: false } },
      where: { date: date, doctor: { id: doctorId } },
      relations: ["doctor", "user"]
    });
    data.map((e: any) => {
      e.status = 1;
      const index = dateDefaultList.findIndex((dllElem: any) => {
        return dllElem.time == e.time;
      });
      dateDefaultList[index] = e;

    });

    return dateDefaultList;
  }

  async findCheckReception(doctorId: number, date: Date, time: Date) {
    return this.receptionRepository.find({
      where: {
        doctor: { id: doctorId },
        date: date,
        time: time
      }
    })
  }
  async findPolis(polis: string) {
    const data = await this.receptionRepository.find({
      select: { id: true, time: true, user: { id: true }, doctor: { id: true, description: false, image: false, reception: false, name: true }, date: true },
      where: { user: { polis: polis } },
      relations: ["doctor", "user"]
    });
    return data;
  }
}
