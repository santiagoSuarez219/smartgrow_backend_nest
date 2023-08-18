import { Test, TestingModule } from '@nestjs/testing';
import { InfluxdbController } from './influxdb.controller';

describe('InfluxdbController', () => {
  let controller: InfluxdbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfluxdbController],
    }).compile();

    controller = module.get<InfluxdbController>(InfluxdbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
