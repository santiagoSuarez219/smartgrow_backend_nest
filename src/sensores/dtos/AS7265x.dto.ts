import { IsNotEmpty, IsNumber, IsMongoId } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDocumentBme680Dto {
  @ApiProperty()
  @IsNumber()
  readonly 410: number;

  @ApiProperty()
  @IsNumber()
  readonly 435: number;

  @ApiProperty()
  @IsNumber()
  readonly 460: number;

  @ApiProperty()
  @IsNumber()
  readonly 485:number;

  @ApiProperty()
  @IsNumber()
  readonly 510:number;

  @ApiProperty()
  @IsNumber()
  readonly 535:number;

  @ApiProperty()
  @IsNumber()
  readonly 560:number;

  @ApiProperty()
  @IsNumber()
  readonly 585:number;

  @ApiProperty()
  @IsNumber()
  readonly 610:number;

  @ApiProperty()
  @IsNumber()
  readonly 645:number;

  @ApiProperty()
  @IsNumber()
  readonly 680:number;

  @ApiProperty()
  @IsNumber()
  readonly 705:number;

  @ApiProperty()
  @IsNumber()
  readonly 730:number;

  @ApiProperty()
  @IsNumber()
  readonly 760:number;
  
  @ApiProperty()
  @IsNumber()
  readonly 810:number;
  
  @ApiProperty()
  @IsNumber()
  readonly 860:number;
  
  @ApiProperty()
  @IsNumber()
  readonly 900:number;@ApiProperty()
  
  @ApiProperty()
  @IsNumber()
  readonly 940:number;
  
  @IsNotEmpty()
  @IsMongoId()
  readonly sensor: string;
}
