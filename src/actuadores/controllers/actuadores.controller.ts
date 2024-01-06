import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Body,
  Put,
  Param,
} from '@nestjs/common';

import {
  CreateActuadoresDto,
  UpdateActuadoresDto,
} from '../dtos/actuadores.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { ActuadoresService } from '../services/actuadores.service';

@ApiTags('actuadores')
@Controller('actuadores')
export class ActuadoresController {
  constructor(private actuadoresService: ActuadoresService) {}

  @ApiOperation({ summary: 'List of all actuadores' })
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.actuadoresService.findAll();
  }

  @ApiOperation({ summary: 'crear un actuador' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateActuadoresDto) {
    return this.actuadoresService.create(payload);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() payload: UpdateActuadoresDto) {
    return this.actuadoresService.update(id, payload);
  }
}
