import { Test, TestingModule } from '@nestjs/testing';
import { Scd40Controller } from './scd40.controller';

describe('Scd40Controller', () => {
  let controller: Scd40Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Scd40Controller],
    }).compile();

    controller = module.get<Scd40Controller>(Scd40Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
