import { Test, TestingModule } from '@nestjs/testing';
import { EnclosureService } from './enclosure.service';

describe('EnclosureService', () => {
  let service: EnclosureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnclosureService],
    }).compile();

    service = module.get<EnclosureService>(EnclosureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
