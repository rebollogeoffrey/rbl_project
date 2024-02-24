import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Person } from '../person/entities/person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Item, Person])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
