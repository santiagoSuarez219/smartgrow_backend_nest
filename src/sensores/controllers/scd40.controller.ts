import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Scd40Service } from '../services/scd40.service';
import { CreateDataScd40Dto } from './../dtos/scd40.dto'

@ApiTags('scd40')
@Controller('scd40')
export class Scd40Controller {
  constructor(private scd40Service: Scd40Service){}

  @ApiOperation({ summary: 'List of all data scd40' })
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll(){
    return this.scd40Service.findAll();
  }

  @ApiOperation({ summary: 'Get data scd40 by id' })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('id') id: string){
    return this.scd40Service.findOne(id);
  }
}
