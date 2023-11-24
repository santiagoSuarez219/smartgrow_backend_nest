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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { As7265xService } from '../services/as7265x.service';
import { CreateDocumentAs7265xDto } from '../dtos/AS7265x.dto';

@ApiTags('as7265x')
@Controller('as7265x')
export class As7265xController {
  constructor(private as7265xService: As7265xService) {}

  @ApiOperation({ summary: 'Get data AS7265x' })
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.as7265xService.findAll();
  }

  @ApiOperation({ summary: 'Get one data AS7265x by Id' })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('id') id: string) {
    return this.as7265xService.findOne(id);
  }

  @ApiOperation({ summary: 'Create document AS7265x' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() data: CreateDocumentAs7265xDto) {
    return this.as7265xService.create(data);
  }

  @ApiOperation({ summary: 'delete all documents in AS7265x' })
  @Delete()
  @HttpCode(HttpStatus.OK)
  deleteAll() {
    return this.as7265xService.removeAll();
  }

  @ApiOperation({ summary: 'delete one document AS7265x by id' })
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: string) {
    return this.as7265xService.remove(id);
  }
}
