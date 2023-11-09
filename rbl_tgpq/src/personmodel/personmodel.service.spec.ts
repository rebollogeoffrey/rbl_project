import { Test, TestingModule } from '@nestjs/testing';
import { PersonModelService } from './personmodel.service';

describe('PersonModelService', () => {
  let service: PersonModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonModelService],
    }).compile();

    service = module.get<PersonModelService>(PersonModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
