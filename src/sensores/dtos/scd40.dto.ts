import { IsNotEmpty, IsNumber, IsMongoId } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDocumentScd40Dto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly co2: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly temperatura: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly humedad: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  readonly sensor: string;
}
