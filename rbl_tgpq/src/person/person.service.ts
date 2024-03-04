import { UpdatePersonDto } from './dto/update-person.dto';
import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { MoreThan, Not, Repository } from 'typeorm';
// import { FightPersonDto } from './dto/fight-person.dto';
import { PersonModel } from '../personmodel/entities/personmodel.entity';
import { Item, Stat_affected, Type_item } from '../item/entities/item.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
    @InjectRepository(PersonModel)
    private personModelRepository: Repository<PersonModel>,
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  create(createPersonDto: CreatePersonDto) {
    return this.personRepository.save(createPersonDto);
  }

  findAll() {
    return this.personRepository.find();
  }

  findById(id: string): Promise<Person | undefined> {
    return this.personRepository.findOne({
      where: [{ id }],
      relations: ['items', 'personModel'],
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

  async endOfBattle(idHero: string, idMonster: string) {
    const hero = await this.findById(idHero);
    const monster = await this.findById(idMonster);

    return await this.personRepository.save({
      id: idHero,
      gold: hero.gold + monster.gold,
    });
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
    return dexterity;
  }

  async battle(idHero: string, idMonster: string, mode: boolean) {
    const hero = await this.findById(idHero);
    const monster = await this.findById(idMonster);

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
      mode
        ? hero.personModel.dexterity + itemDexterityValue + 10
        : hero.personModel.dexterity + itemDexterityValue,
    );

    const attackMonsterSuccess = this.isAttackSuccess(
      mode
        ? hero.personModel.dodge + itemDodgeValue
        : hero.personModel.dodge + itemDodgeValue + 10,
      monster.personModel.dexterity,
    );

    const newHealthMonster = attackHeroSuccess
      ? monster.health - attackPointsHero
      : monster.health;

    await this.update(monster.id, { ...monster, health: newHealthMonster });

    const newHealthHero =
      newHealthMonster <= 0
        ? hero.personModel.health_max
        : attackMonsterSuccess
        ? hero.health - attackPointsMonster
        : hero.health;

    await this.update(hero.id, { ...hero, health: newHealthHero });

    if (newHealthMonster <= 0) {
      this.remove(idMonster);
    }

    return mode
      ? [
          { newHealthHero },
          { newHealthMonster },
          { attackPointsHero },
          { attackPointsMonster },
          { attackHeroSuccess },
          { attackMonsterSuccess },
        ]
      : [
          newHealthHero,
          newHealthMonster,
          attackPointsMonster,
          attackHeroSuccess,
          attackMonsterSuccess,
        ];
  }

  private getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  async startBattle(idHero: string) {
    const hero = await this.findById(idHero);

    const allMonster = await this.personModelRepository.findBy({
      difficulty: 1,
    });

    const oneRandomMonster = allMonster[this.getRandomInt(allMonster.length)];

    await this.create({
      gold: this.getRandomInt(100),
      health: oneRandomMonster.health_max,
      userId: hero.userId,
      personModel: oneRandomMonster,
      items: [],
    });

    const monsterCreated = await this.personRepository.findOne({
      where: [{ userId: hero.userId, health: MoreThan(0), id: Not(hero.id) }],
      relations: ['items', 'personModel'],
    });

    return [hero, monsterCreated];
  }

  async shop(idPerson: string, idItem: string) {
    const hero = await this.findById(idPerson);
    const itemBought = await this.itemRepository.findOne({
      where: [{ id: idItem }],
    });

    return hero.gold >= 100
      ? (hero.items.push(itemBought),
        await this.update(idPerson, {
          ...hero,
          gold: hero.gold - 100,
        }))
      : 'Not Enougth Gold';
  }
}
