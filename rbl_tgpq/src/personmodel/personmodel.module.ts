import { Module } from '@nestjs/common';
import { PersonModelService } from './personmodel.service';
import { PersonModelController } from './personmodel.controller';

@Module({
  controllers: [PersonModelController],
  providers: [PersonModelService],
})
export class PersonModelModule {}
