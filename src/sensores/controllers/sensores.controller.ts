import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { SensoresService } from '../services/sensores.service';
import {
  CreateDocumentSensorDto,
  UpdateDocumentSensorDto,
} from '../dtos/sensores.dto';

@ApiTags('sensores')
@Controller('sensores')
export class SensoresController {
  constructor(private sensoresService: SensoresService) {}

  @ApiOperation({ summary: 'List of all data sensores' })
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.sensoresService.findAll();
  }

  @ApiOperation({ summary: 'Get data sensores by id' })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('id') id: string) {
    return this.sensoresService.findOne(id);
  }

  @ApiOperation({ summary: 'crear un documento' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateDocumentSensorDto) {
    return this.sensoresService.create(payload);
  }

  @ApiOperation({ summary: 'actualizar un documento' })
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() payload: UpdateDocumentSensorDto) {
    return this.sensoresService.update(id, payload);
  }

  @ApiOperation({ summary: 'eliminar un documento' })
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: string) {
    return this.sensoresService.remove(id);
  }
}
