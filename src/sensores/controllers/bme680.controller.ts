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

import { Bme680Service } from '../services/bme680.service';
import { CreateDocumentBme680Dto } from '../dtos/bme680.dto';

@ApiTags('bme680')
@Controller('bme680')
export class Bme680Controller {
  constructor(private bme680Service: Bme680Service) {}

  @ApiOperation({ summary: 'List of all data bme680' })
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.bme680Service.findAll();
  }

  @ApiOperation({ summary: 'Get data bme680 by id' })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('id') id: string) {
    return this.bme680Service.findOne(id);
  }

  @ApiOperation({ summary: 'crear un documento' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateDocumentBme680Dto) {
    return this.bme680Service.create(payload);
  }

  @ApiOperation({ summary: 'eliminar un documento' })
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: string) {
    return this.bme680Service.remove(id);
  }
}
