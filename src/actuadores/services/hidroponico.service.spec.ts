import { Test, TestingModule } from '@nestjs/testing';
import { HidroponicoService } from './hidroponico.service';

describe('HidroponicoService', () => {
  let service: HidroponicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HidroponicoService],
    }).compile();

    service = module.get<HidroponicoService>(HidroponicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
