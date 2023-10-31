import { Test, TestingModule } from '@nestjs/testing';
import { BatchsService } from './batchs.service';

describe('BatchsService', () => {
  let service: BatchsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BatchsService],
    }).compile();

    service = module.get<BatchsService>(BatchsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
