import { Module } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { HistoryEntity } from './entities/history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([HistoryEntity]), UserModule],
  controllers: [HistoryController],
  providers: [HistoryService],
})

export class HistoryModule { }
