import { Test, TestingModule } from '@nestjs/testing';
import { HidroponicoController } from './hidroponico.controller';

describe('HidroponicoController', () => {
  let controller: HidroponicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HidroponicoController],
    }).compile();

    controller = module.get<HidroponicoController>(HidroponicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
