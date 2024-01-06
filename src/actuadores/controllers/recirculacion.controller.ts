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
  CreateRecirculacionesDto,
  UpdateRecirculacionesDto,
} from '../dtos/recirculacion.dto';

import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { RecirculacionService } from '../services/recirculacion.service';

@ApiTags('recirculacion')
@Controller('recirculacion')
export class RecirculacionController {
  constructor(private recirculacionService: RecirculacionService) {}

  @ApiOperation({ summary: 'List of all recirculacion' })
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.recirculacionService.findAll();
  }

  @ApiOperation({ summary: 'crear un recirculacion' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateRecirculacionesDto) {
    return this.recirculacionService.create(payload);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() payload: UpdateRecirculacionesDto) {
    return this.recirculacionService.update(id, payload);
  }
}
