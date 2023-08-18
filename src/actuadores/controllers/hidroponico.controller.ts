import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { HidroponicoService } from '../services/hidroponico.service';

@ApiTags('hidroponico')
@Controller('hidroponico')
export class HidroponicoController {
  constructor(private hidroponicoService: HidroponicoService) {}

  @ApiOperation({ summary: 'Activacion de actuadores hidroponico' })
  @Get()
  @HttpCode(HttpStatus.OK)
  toggleActuador(
    @Query('actuador') actuador: string,
    @Query('tiempo_recirculacion') timeRecirculacion: number,
  ) {
    return this.hidroponicoService.toggleActuador(actuador, timeRecirculacion);
  }
}
