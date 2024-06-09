import { Injectable } from '@nestjs/common';
import { DoctorEntity } from './entities/doctor.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(DoctorEntity)
    private doctorRepository: Repository<DoctorEntity>,
  ) {

  }

  findAll() {
    return this.doctorRepository.find();
  }

  findOne(id: number) {
    return this.doctorRepository.findOne(
      {
        where: {
          id: id
        }
      }
    );
  }
}
