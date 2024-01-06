import { IsBoolean, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateActuadoresDto {
  @ApiProperty()
  @IsString()
  readonly text: string;

  @ApiProperty()
  @IsBoolean()
  readonly estado: boolean;
}

export class UpdateActuadoresDto extends PartialType(CreateActuadoresDto) {}
