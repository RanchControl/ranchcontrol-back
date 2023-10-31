import { Test, TestingModule } from '@nestjs/testing';
import { BatchsController } from './batchs.controller';
import { BatchsService } from './batchs.service';

describe('BatchsController', () => {
  let controller: BatchsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BatchsController],
      providers: [BatchsService],
    }).compile();

    controller = module.get<BatchsController>(BatchsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
