import { Module } from '@nestjs/common';
import { ReceptionService } from './reception.service';
import { ReceptionController } from './reception.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReceptionEntity } from './entities/reception.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReceptionEntity])],
  controllers: [ReceptionController],
  providers: [ReceptionService],
})
export class ReceptionModule {}
