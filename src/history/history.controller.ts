import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { HistoryService } from './history.service';
import { CreateHistoryDto } from './dto/create-history.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('history')
@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) { }

  @Post()
  async create(@Body() createHistoryDto: CreateHistoryDto) {
    return await this.historyService.create(createHistoryDto);
  }

  @Get(':polis')
  findOne(@Param('polis') polis: string) {
    return this.historyService.findOne(polis);
  }
}
