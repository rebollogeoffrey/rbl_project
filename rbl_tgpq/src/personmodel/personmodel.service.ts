import { Injectable } from '@nestjs/common';
import { CreatePersonModelDto } from './dto/create-personmodel.dto';
import { UpdatePersonModelDto } from './dto/update-personmodel.dto';

@Injectable()
export class PersonModelService {
  create(createPersonModelDto: CreatePersonModelDto) {
    return 'This action adds a new PersonModel';
  }

  findAll() {
    return `This action returns all PersonModel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} PersonModel`;
  }

  update(id: number, updatePersonModelDto: UpdatePersonModelDto) {
    return `This action updates a #${id} PersonModel`;
  }

  remove(id: number) {
    return `This action removes a #${id} PersonModel`;
  }
}
