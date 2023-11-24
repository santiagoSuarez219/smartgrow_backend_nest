import { IsNotEmpty, IsNumber, IsMongoId } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDocumentAs7265xDto {
  @ApiProperty()
  @IsNumber()
  readonly A: number;

  @ApiProperty()
  @IsNumber()
  readonly B: number;

  @ApiProperty()
  @IsNumber()
  readonly C: number;

  @ApiProperty()
  @IsNumber()
  readonly D:number;

  @ApiProperty()
  @IsNumber()
  readonly E:number;

  @ApiProperty()
  @IsNumber()
  readonly F:number;

  @ApiProperty()
  @IsNumber()
  readonly G:number;

  @ApiProperty()
  @IsNumber()
  readonly H:number;

  @ApiProperty()
  @IsNumber()
  readonly R:number;

  @ApiProperty()
  @IsNumber()
  readonly I:number;

  @ApiProperty()
  @IsNumber()
  readonly S:number;

  @ApiProperty()
  @IsNumber()
  readonly J:number;

  @ApiProperty()
  @IsNumber()
  readonly T:number;

  @ApiProperty()
  @IsNumber()
  readonly U:number;
  
  @ApiProperty()
  @IsNumber()
  readonly V:number;
  
  @ApiProperty()
  @IsNumber()
  readonly W:number;
  
  @ApiProperty()
  @IsNumber()
  readonly K:number;@ApiProperty()
  
  @ApiProperty()
  @IsNumber()
  readonly L:number;
  
  @IsNotEmpty()
  @IsMongoId()
  readonly sensor: string;
}
