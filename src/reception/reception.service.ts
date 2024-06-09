import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateReceptionDto } from './dto/create-reception.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ReceptionEntity } from './entities/reception.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReceptionService {
  constructor(
    @InjectRepository(ReceptionEntity)
    private receptionRepository: Repository<ReceptionEntity>,
  ) {

  }
  async create(createReceptionDto: CreateReceptionDto) {
    const check = await this.findCheckReception(createReceptionDto.idDoctor, createReceptionDto.date, createReceptionDto.time);
    console.log(check.length);

    if (check.length !== 0) {
      throw new HttpException('Текущий врач занят на эту дату и время', HttpStatus.FORBIDDEN);
    }

    const elem = { ...createReceptionDto, idDoctor: undefined, doctor: { id: createReceptionDto.idDoctor }, }
    return this.receptionRepository.save(elem);
  }

  async findDate(date: Date) {
    const data = await this.receptionRepository.find({
      select: { id: true, doctor: { id: true }, time: true, user: { id: true } },
      where: { date: date },
      relations: ["doctor", "user"]
    });
    const dateDefaultList = [
      { id: 1, }
    ]
    console.log(data);
    return data;
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
  findOne(id: number) {
    return `This action returns a #${id} reception`;
  }
}
