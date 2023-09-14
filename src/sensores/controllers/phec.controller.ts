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

import { PhecService } from '../services/phec.service';
import { CreateDocumentPhEcDto } from '../dtos/phec.dto';

@ApiTags('ph y ec')
@Controller('phec')
export class PhecController {
  constructor(private phecService: PhecService) {}

  @ApiOperation({ summary: 'List of all data ph y ec' })
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.phecService.findAll();
  }

  @ApiOperation({ summary: 'Get data ph y ec by id' })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('id') id: string) {
    return this.phecService.findOne(id);
  }

  @ApiOperation({ summary: 'crear un documento' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateDocumentPhEcDto) {
    return this.phecService.create(payload);
  }

  @ApiOperation({ summary: 'eliminar un documento' })
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: string) {
    return this.phecService.remove(id);
  }
}
