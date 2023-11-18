import { Test, TestingModule } from '@nestjs/testing';
import { SensoresService } from './sensores.service';

describe('SensoresService', () => {
  let service: SensoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SensoresService],
    }).compile();

    service = module.get<SensoresService>(SensoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
