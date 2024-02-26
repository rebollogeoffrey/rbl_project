import { Test, TestingModule } from '@nestjs/testing';
import { StatisticController } from './statistic.controller';
import { StatisticService } from './statistic.service';

describe('StatisticController', () => {
  let controller: StatisticController;
  let service: StatisticService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatisticController],
      providers: [StatisticService],
    }).compile();

    controller = module.get<StatisticController>(StatisticController);
    service = module.get<StatisticService>(StatisticService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });
});
