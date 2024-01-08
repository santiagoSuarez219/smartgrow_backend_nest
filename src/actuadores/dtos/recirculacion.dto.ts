import { IsDate, IsNumber } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateRecirculacionesDto {
  @ApiProperty()
  @IsDate()
  readonly date: Date;

  @ApiProperty()
  @IsNumber()
  readonly cantidad: number;
}

export class UpdateRecirculacionesDto extends PartialType(
  CreateRecirculacionesDto,
) {}
