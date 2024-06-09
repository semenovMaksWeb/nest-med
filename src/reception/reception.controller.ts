import { Controller, Get, Post, Body, Patch, Param, Delete, Search, Query } from '@nestjs/common';
import { ReceptionService } from './reception.service';
import { CreateReceptionDto } from './dto/create-reception.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('reception')
@Controller('reception')
export class ReceptionController {
  constructor(private readonly receptionService: ReceptionService) { }

  @Post()
  create(@Body() createReceptionDto: CreateReceptionDto) {
    return this.receptionService.create(createReceptionDto);
  }

  @Get()
  async findDate(@Query('date') date: Date, @Query('doctorId') doctorId: string) {
    return await this.receptionService.findDate(date, +doctorId);
  }

  @Get('/polis/:polis')
  findPolis(@Param('polis') polis: string) {
    return this.receptionService.findPolis(polis);
  }
}
