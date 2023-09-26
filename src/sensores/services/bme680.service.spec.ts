import { Test, TestingModule } from '@nestjs/testing';
import { Bme680Service } from './bme680.service';

describe('Bme680Service', () => {
  let service: Bme680Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Bme680Service],
    }).compile();

    service = module.get<Bme680Service>(Bme680Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
