import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {

  }

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  async checkPolis(polis: string) {
    const polisFind = await this.findPolis(polis);
    return !!polisFind;
  }

  async findPolis(polis: string) {
    return await this.userRepository.findOne({ where: { polis: polis } });
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id: id } });
  }
}
