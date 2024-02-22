import { Module } from '@nestjs/common';
import { PersonModelService } from './personmodel.service';
import { PersonModelController } from './personmodel.controller';
import { PersonModel } from './entities/personmodel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PersonModel])],

  controllers: [PersonModelController],
  providers: [PersonModelService],
})
export class PersonModelModule {}
