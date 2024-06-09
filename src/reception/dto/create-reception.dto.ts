import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateReceptionDto {
    @IsNotEmpty()
    @ApiProperty()
    idDoctor: number

    @IsNotEmpty()
    @ApiProperty()
    date: Date

    @IsNotEmpty()
    @ApiProperty()
    time: Date
}
