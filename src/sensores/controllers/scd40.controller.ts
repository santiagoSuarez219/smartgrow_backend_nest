import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { Scd40Service } from '../services/scd40.service';
import { CreateDocumentScd40Dto } from '../dtos/scd40.dto';

@ApiTags('scd40')
@Controller('scd40')
export class Scd40Controller {
  constructor(private scd40Service: Scd40Service) {}

  @ApiOperation({ summary: 'List of all data scd40' })
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.scd40Service.findAll();
  }

  @ApiOperation({ summary: 'Get data scd40 by id' })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('id') id: string) {
    return this.scd40Service.findOne(id);
  }

  @ApiOperation({ summary: 'crear un documento' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateDocumentScd40Dto) {
    return this.scd40Service.create(payload);
  }

  @ApiOperation({ summary: 'eliminar todos los documentos' })
  @Delete()
  @HttpCode(HttpStatus.OK)
  deleteAll() {
    return this.scd40Service.removeAll();
  }

  @ApiOperation({ summary: 'eliminar un documento' })
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: string) {
    return this.scd40Service.remove(id);
  }
}
