import { Injectable } from '@nestjs/common';
import { CreatePersonModelDto } from './dto/create-personmodel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category, PersonModel } from './entities/personmodel.entity';
import { Repository } from 'typeorm';
import { UpdatePersonModelDto } from './dto/update-personmodel.dto';

@Injectable()
export class PersonModelService {
  constructor(
    @InjectRepository(PersonModel)
    private personModelRepository: Repository<PersonModel>,
  ) {}

  create(createPersonModelDto: CreatePersonModelDto) {
    return this.personModelRepository.create(createPersonModelDto);
  }

  findAll() {
    return this.personModelRepository.find();
  }

  findById(id: string): Promise<PersonModel | undefined> {
    return this.personModelRepository.findOne({
      where: [{ id }],
    });
  }

  async update(
    idPersonModel: string,
    updatePersonModelDto: UpdatePersonModelDto,
  ): Promise<PersonModel | undefined> {
    const updatePersonModel = { id: idPersonModel, ...updatePersonModelDto };
    return this.personModelRepository.save(updatePersonModel);
  }

  async remove(id: string) {
    const result = await this.personModelRepository.delete(id);
    if (result.affected === 1) {
      return 'PersonModel Deleted';
    } else return 'PersonModel Not Found';
  }

  async getPersonModelByCategory(
    category: Category,
  ): Promise<PersonModel[] | undefined> {
    return this.personModelRepository.findBy({ category: category });
  }

  async getHero() {
    return this.personModelRepository.findBy({ difficulty: 10 });
  }
}
