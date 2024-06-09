import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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
  async findDate(@Param('date') date: Date) {
    return await this.receptionService.findDate(date);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receptionService.findOne(+id);
  }
}
