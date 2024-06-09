import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateHistoryDto {
    @IsNotEmpty()
    @ApiProperty()
    polis: string;

    @IsNotEmpty()
    @ApiProperty()
    userId: number;

    @IsNotEmpty()
    @ApiProperty()
    text: string;
}
