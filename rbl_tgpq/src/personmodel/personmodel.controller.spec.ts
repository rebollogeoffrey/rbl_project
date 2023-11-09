import { Test, TestingModule } from '@nestjs/testing';
import { PersonModelController } from './personmodel.controller';
import { PersonModelService } from './personmodel.service';

describe('PersonModelController', () => {
  let controller: PersonModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonModelController],
      providers: [PersonModelService],
    }).compile();

    controller = module.get<PersonModelController>(PersonModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
