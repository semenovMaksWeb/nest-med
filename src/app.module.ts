import { Module } from '@nestjs/common';
import { DoctorModule } from './doctor/doctor.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { bdMain } from './database/bdMain';
import { ReceptionModule } from './reception/reception.module';
import { UserModule } from './user/user.module';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [TypeOrmModule.forRoot(bdMain), DoctorModule, ReceptionModule, UserModule, HistoryModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
