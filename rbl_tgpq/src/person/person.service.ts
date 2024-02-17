import { UpdatePersonDto } from './dto/update-person.dto';
import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';
import { FightPersonDto } from './dto/fight-person.dto';
import { PersonModel } from '../personmodel/entities/personmodel.entity';
import { Stat_affected, Type_item } from '../item/entities/item.entity';

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

  async update(idPerson: string, UpdatePersonDto: UpdatePersonDto) {
    const updatePerson = { idPerson, ...UpdatePersonDto };
    return this.personRepository.save(updatePerson);
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

  private getDamage(strength: number, weapon?: number) {
    return weapon ? strength + weapon : strength;
  }

  private isDexteritySuccess(value: number) {
    const random = Math.random() * 100;
    return random <= value ? true : false;
  }

  private isDodgeSuccess(value: number) {
    const random = Math.random() * 100;
    return random <= value ? true : false;
  }

  private isAttackSuccess(dod: number, dex: number) {
    let dodge: boolean;
    let dexterity: boolean;
    do {
      dodge = this.isDodgeSuccess(dod);
      dexterity = this.isDexteritySuccess(dex);
    } while ((dodge && dexterity) || (!dodge && !dexterity));
    return dex;
  }

  async battle(hero: FightPersonDto, monster: FightPersonDto, mode: boolean) {
    // if mode true : fight else defend
    let itemStrengthValue = 0;
    let itemDexterityValue = 0;
    let itemDodgeValue = 0;
    let itemHealthValue = 0;

    hero.items.map((item) => {
      if (item.type !== Type_item.POTION) {
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
      }
    });

    const attackPointsHero = this.getDamage(
      hero.personModel.strength,
      itemStrengthValue,
    );

    const attackPointsMonster = this.getDamage(monster.personModel.strength);

    const attackHeroSuccess = this.isAttackSuccess(
      monster.personModel.dodge,
      hero.personModel.dexterity + itemDexterityValue,
    );

    const attackMonsterSuccess = this.isAttackSuccess(
      mode
        ? hero.personModel.dodge + itemDodgeValue + 10
        : hero.personModel.dodge + itemDodgeValue,
      monster.personModel.dexterity,
    );

    const newHealthHero = attackMonsterSuccess
      ? hero.health - attackPointsMonster
      : hero.health;

    const newHealthMonster = attackHeroSuccess
      ? monster.health - attackPointsHero
      : monster.health;

    return mode
      ? [
          newHealthHero,
          newHealthMonster,
          attackPointsHero,
          attackPointsMonster,
          attackHeroSuccess,
          attackMonsterSuccess,
        ]
      : [
          newHealthHero,
          monster.health,
          attackPointsMonster,
          attackHeroSuccess,
          attackMonsterSuccess,
        ];
  }

  async heroDead() {}
}
