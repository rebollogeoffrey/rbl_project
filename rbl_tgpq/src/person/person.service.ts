import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';
import { FightPersonDto } from './dto/fight-person.dto';
import { PersonModel } from '../personmodel/entities/personmodel.entity';
import { Stat_affected, Type } from '../item/entities/item.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
    @InjectRepository(PersonModel)
    private personModelRepository: Repository<PersonModel>,
  ) {}

  create(createPersonDto: CreatePersonDto) {
    return this.personRepository.create(createPersonDto);
  }

  findAll() {
    return this.personRepository.find();
  }

  findById(id: string): Promise<Person | undefined> {
    return this.personRepository.findOne({
      where: [{ id }],
    });
  }

  async update(updatePersonDto): Promise<Person | undefined> {
    return this.personRepository.save(updatePersonDto);
  }

  async remove(id: string) {
    const result = await this.personRepository.delete(id);
    if (result.affected === 1) {
      return 'Person Deleted';
    } else return 'Person Not Found';
  }

  async getPersonByUserId(userId: string): Promise<Person[] | undefined> {
    return this.personRepository.findBy({ userId: userId });
  }

  async endOfBattle(personId: string, gold: number) {
    return this.personRepository.save({ id: personId, gold });
  }

  private getDamage(weapon, strength) {
    return weapon ? strength + weapon.damage : strength;
  }

  async fight(
    hero: FightPersonDto,
    // monster: FightPersonModelDto
  ) {
    let itemStrengthValue = 0;
    let itemDexterityValue = 0;
    let itemDodgeValue = 0;
    let itemHealthValue = 0;
    hero.items.map((item) => {
      // if (item.type !== Type.POTION) {
      if (item.stat_affected === Stat_affected.STRENGTH) {
        itemStrengthValue = itemStrengthValue + item.value;
      }
      if (item.stat_affected === Stat_affected.DEXTERITY) {
        itemDexterityValue = itemDexterityValue + item.value;
      }
      if (item.stat_affected === Stat_affected.DODGE) {
        itemDodgeValue = itemDodgeValue + item.value;
      }
      if (item.stat_affected === Stat_affected.HEALTH) {
        itemHealthValue = itemHealthValue + item.value;
      }
      // }
    });
    const attackPoints = this.getDamage(
      hero.items[0].value,
      hero.personModel.strength,
    );

    return attackPoints;
  }
}
