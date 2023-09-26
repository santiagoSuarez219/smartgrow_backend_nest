import { IsNotEmpty, IsNumber, IsMongoId } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDocumentBme680Dto {
  @ApiProperty()
  @IsNumber()
  readonly temperatura: number;

  @ApiProperty()
  @IsNumber()
  readonly humedad: number;

  @ApiProperty()
  @IsNumber()
  readonly altitud: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  readonly sensor: string;
}
