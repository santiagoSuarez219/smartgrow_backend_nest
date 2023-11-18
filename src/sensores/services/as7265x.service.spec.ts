import { Test, TestingModule } from '@nestjs/testing';
import { As7265xService } from './as7265x.service';

describe('As7265xService', () => {
  let service: As7265xService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [As7265xService],
    }).compile();

    service = module.get<As7265xService>(As7265xService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
