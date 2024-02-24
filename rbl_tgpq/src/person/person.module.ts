import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { Person } from './entities/person.entity';

import { PersonModelService } from '../personmodel/personmodel.service';
import { PersonModel } from '../personmodel/entities/personmodel.entity';
import { Item } from '../item/entities/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Person, PersonModel, Item])],
  controllers: [PersonController],
  providers: [PersonService, PersonModelService],
})
export class PersonModule {}
