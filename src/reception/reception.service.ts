import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateReceptionDto } from './dto/create-reception.dto';
import { UpdateReceptionDto } from './dto/update-reception.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ReceptionEntity } from './entities/reception.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReceptionService {
  constructor(
    @InjectRepository(ReceptionEntity)
    private doctorRepository: Repository<ReceptionEntity>,
  ) {

  }
  async create(createReceptionDto: CreateReceptionDto) {
    const check = await this.findCheckReception(createReceptionDto.idDoctor, createReceptionDto.date, createReceptionDto.time);
    console.log(check.length);
    
    if (check.length !== 0) {
      throw new HttpException('Текущий врач занят на эту дату и время', HttpStatus.FORBIDDEN);
    }

    const elem = { ...createReceptionDto, idDoctor: undefined, doctor: { id: createReceptionDto.idDoctor }, }
    return this.doctorRepository.save(elem);
  }

  findAll() {
    return `This action returns all reception`;
  }
  async findCheckReception(doctorId: number, date: Date, time: Date) {
    return this.doctorRepository.find({
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

  update(id: number, updateReceptionDto: UpdateReceptionDto) {
    return `This action updates a #${id} reception`;
  }

  remove(id: number) {
    return `This action removes a #${id} reception`;
  }
}
