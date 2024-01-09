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
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UpdateSetPointsDto } from '../dtos/setpoints.dto';
import { SetpointsService } from '../services/setpoints.service';

@ApiTags('setpoints')
@Controller('setpoints')
export class SetpointsController {
  constructor(private setPointsService: SetpointsService) {}

  @ApiOperation({ summary: 'List of all setpoints' })
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.setPointsService.findAll();
  }

  @ApiOperation({ summary: 'Update a setpoint' })
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() payload: UpdateSetPointsDto) {
    return this.setPointsService.update(id, payload);
  }
}
