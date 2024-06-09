import { Injectable } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { HistoryEntity } from './entities/history.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(HistoryEntity)
    private historyRepository: Repository<HistoryEntity>,
    private userSerive: UserService
  ) {

  }
  async create(createHistoryDto: CreateHistoryDto) {
    const doctor = await this.userSerive.findPolis(createHistoryDto.polis);
    if (doctor.doctor) {
      return await this.historyRepository.save(
        {
          doctor: { id: doctor.id },
          text: createHistoryDto.text,
          user: { id: createHistoryDto.userId },
          date: new Date()
        });
    }
    return null;
  }

  async findOne(polis: string) {
    const user = await this.userSerive.findPolis(polis);
    if (user.id) {
      return await this.historyRepository.find({ where: { user: { id: user.id } } });
    }
    return [];
  }
}
