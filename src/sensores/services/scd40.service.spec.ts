import { Test, TestingModule } from '@nestjs/testing';
import { Scd40Service } from './scd40.service';

describe('Scd40Service', () => {
  let service: Scd40Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Scd40Service],
    }).compile();

    service = module.get<Scd40Service>(Scd40Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
