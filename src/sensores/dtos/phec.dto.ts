import { IsNotEmpty, IsNumber, IsMongoId } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDocumentPhEcDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly ph: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly ec: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly temperatura: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  readonly sensor: string;
}
