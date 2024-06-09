import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty()
    @ApiProperty()
    polis: string

    @IsNotEmpty()
    @ApiProperty()
    fio: string

    @IsNotEmpty()
    @ApiProperty()
    tlf: number
}
