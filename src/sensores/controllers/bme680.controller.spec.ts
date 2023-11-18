import { Test, TestingModule } from '@nestjs/testing';
import { Bme680Controller } from './bme680.controller';

describe('Bme680Controller', () => {
  let controller: Bme680Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Bme680Controller],
    }).compile();

    controller = module.get<Bme680Controller>(Bme680Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
