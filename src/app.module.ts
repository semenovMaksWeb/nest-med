import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorModule } from './doctor/doctor.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { bdMain } from './database/bdMain';

@Module({
  imports: [TypeOrmModule.forRoot(bdMain), DoctorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
