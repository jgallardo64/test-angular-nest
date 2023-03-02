import { Test, TestingModule } from '@nestjs/testing';
import { GrandPrixesController } from './grand-prixes.controller';
import { GrandPrixesService } from './grand-prixes.service';

describe('GrandPrixesController', () => {
  let controller: GrandPrixesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrandPrixesController],
      providers: [GrandPrixesService],
    }).compile();

    controller = module.get<GrandPrixesController>(GrandPrixesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
