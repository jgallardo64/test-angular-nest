import { Test, TestingModule } from '@nestjs/testing';
import { GrandPrixesService } from './grand-prixes.service';

describe('GrandPrixesService', () => {
  let service: GrandPrixesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrandPrixesService],
    }).compile();

    service = module.get<GrandPrixesService>(GrandPrixesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
