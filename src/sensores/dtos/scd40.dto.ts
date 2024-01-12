import {
  IsNotEmpty,
  IsNumber,
  IsMongoId,
  IsString,
  IsOptional,
  IsDate,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDocumentScd40Dto {
  @ApiProperty()
  @IsNumber()
  readonly co2: number;

  @ApiProperty()
  @IsNumber()
  readonly temperatura: number;

  @ApiProperty()
  @IsNumber()
  readonly humedad: number;

  @ApiProperty()
  @IsNumber()
  readonly VPD: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  readonly sensor: string;
}

export class FilterProductByDataDto {
  @IsOptional()
  @IsString()
  data: string;

  @IsOptional()
  @IsDate()
  fecha_inicial: Date;

  @IsOptional()
  @IsDate()
  fecha_final: Date;
}
