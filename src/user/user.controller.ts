import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Get('doctor/:polis')
  async checkDoctor(@Param('polis') polis: string) {
    return await this.userService.checkPolisAndDoctor(polis);
  }

  @Get('/check/polis/:polis')
  checkPolis(@Param('polis') polis: string) {
    return this.userService.checkPolis(polis);
  }
}
