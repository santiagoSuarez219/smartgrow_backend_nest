import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDataScd40Dto{
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
  @IsDate()
  readonly fecha: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly hora: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly tipo: string;
}
