import { Test, TestingModule } from '@nestjs/testing';
import { PhecService } from './phec.service';

describe('PhecService', () => {
  let service: PhecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhecService],
    }).compile();

    service = module.get<PhecService>(PhecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
