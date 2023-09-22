import { Test, TestingModule } from '@nestjs/testing';
import { SensoresController } from './sensores.controller';

describe('SensoresController', () => {
  let controller: SensoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SensoresController],
    }).compile();

    controller = module.get<SensoresController>(SensoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
