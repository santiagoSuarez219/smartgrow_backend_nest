import { Test, TestingModule } from '@nestjs/testing';
import { PhecController } from './phec.controller';

describe('PhecController', () => {
  let controller: PhecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhecController],
    }).compile();

    controller = module.get<PhecController>(PhecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
