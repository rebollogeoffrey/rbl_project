import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item, Stat_affected, Type_item } from './entities/item.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  create(createItem: CreateItemDto) {
    return this.itemRepository.create(createItem);
  }

  findAll() {
    return this.itemRepository.find();
  }

  findById(id: string): Promise<Item | undefined> {
    return this.itemRepository.findOne({
      where: [{ id }],
    });
  }

  async update(
    idItem: number,
    updateItemDto: UpdateItemDto,
  ): Promise<Item | undefined> {
    return this.itemRepository.save({ idItem, ...updateItemDto });
  }

  async remove(id: string) {
    const result = await this.itemRepository.delete(id);
    if (result.affected === 1) {
      return 'Item Deleted';
    } else return 'Item Not Found';
  }

  async getItemByType(type: Type_item): Promise<Item[] | undefined> {
    return this.itemRepository.findBy({ type: type });
  }

  async getItemByStat(stat: Stat_affected): Promise<Item[] | undefined> {
    return this.itemRepository.findBy({ stat_affected: stat });
  }
}
