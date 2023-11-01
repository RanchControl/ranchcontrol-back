import { Test, TestingModule } from '@nestjs/testing';
import { EnclosureController } from './enclosure.controller';
import { EnclosureService } from './enclosure.service';

describe('EnclosureController', () => {
  let controller: EnclosureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnclosureController],
      providers: [EnclosureService],
    }).compile();

    controller = module.get<EnclosureController>(EnclosureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
