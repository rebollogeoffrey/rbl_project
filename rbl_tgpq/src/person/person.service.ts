import { UpdatePersonDto } from './dto/update-person.dto';
import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';
// import { FightPersonDto } from './dto/fight-person.dto';
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

  async battle(
    idHero: string,
    idMonster: string,
    mode: boolean,
    healthMonster?: number,
  ) {
    const hero = await this.findById(idHero);
    const monster = await this.personModelRepository.findOne({
      where: [{ id: idMonster }],
    });

    if (!healthMonster) {
      healthMonster = monster.health_max;
    }

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

    const attackPointsMonster = this.getDamage(monster.strength);

    const attackHeroSuccess = this.isAttackSuccess(
      monster.dodge,
      hero.personModel.dexterity + itemDexterityValue,
    );

    const attackMonsterSuccess = this.isAttackSuccess(
      mode
        ? hero.personModel.dodge + itemDodgeValue + 10
        : hero.personModel.dodge + itemDodgeValue,
      monster.dexterity,
    );

    const newHealthHero = attackMonsterSuccess
      ? hero.health - attackPointsMonster
      : hero.health;

    healthMonster = attackHeroSuccess
      ? healthMonster - attackPointsHero
      : healthMonster;

    this.update(hero.id, { health: newHealthHero });

    return mode
      ? [
          newHealthHero,
          healthMonster,
          attackPointsHero,
          attackPointsMonster,
          attackHeroSuccess,
          attackMonsterSuccess,
        ]
      : [
          newHealthHero,
          healthMonster,
          attackPointsMonster,
          attackHeroSuccess,
          attackMonsterSuccess,
        ];
  }

  private getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  async startBattle(idHero: string, idUser: string) {
    const hero = await this.findById(idHero);

    const allMonster = this.personModelRepository.findBy({ difficulty: 1 });
    const oneRandomMonster =
      allMonster[this.getRandomInt((await allMonster).length)];
    const monster = await this.create({
      gold: this.getRandomInt(100),
      health: oneRandomMonster.health_max,
      userId: idUser,
      personModel: oneRandomMonster,
      items: [],
    });

    return [hero, monster];
  }
}
