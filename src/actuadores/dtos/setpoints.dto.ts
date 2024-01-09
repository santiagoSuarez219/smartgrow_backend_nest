import { IsNumber } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateSetPointsDto {
  @ApiProperty()
  @IsNumber()
  readonly ph: number;

  @ApiProperty()
  @IsNumber()
  readonly ec: number;
}

export class UpdateSetPointsDto extends PartialType(CreateSetPointsDto) {}
