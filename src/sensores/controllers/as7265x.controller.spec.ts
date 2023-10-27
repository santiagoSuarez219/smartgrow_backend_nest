import { Test, TestingModule } from '@nestjs/testing';
import { As7265xController } from './as7265x.controller';

describe('As7265xController', () => {
  let controller: As7265xController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [As7265xController],
    }).compile();

    controller = module.get<As7265xController>(As7265xController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
