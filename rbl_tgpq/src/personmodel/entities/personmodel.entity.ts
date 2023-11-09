import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Person } from '../../person/entities/person.entity';

export enum Category {
  ANIMATE = 'Animate',
  BLOB = 'Blob',
  DEAMON = 'Daemon',
  ELEMENTAL = 'Elemental',
  GOLEM = 'Golem',
  HERO = 'Hero',
  MAGIC = 'Magic',
  MERCHANT = 'Merchant',
  PARTNER = 'Partner',
  PLANT = 'Plant',
  THIEF = 'Thief',
  UNDEAD = 'Undead',
  WOLF = 'Wolf',
}

@Entity()
export class PersonModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 80,
    nullable: false,
    unique: false,
    comment: "PersonModel's name",
  })
  name: string;

  @Column({
    type: 'int',
    unique: false,
    nullable: true,
    comment: 'Maximum health points this personage can have',
  })
  health_max: number;

  @Column({
    type: 'int',
    unique: false,
    nullable: true,
    comment: 'Strength is used to calculate damage this PersonModel deal',
  })
  strength: number;

  @Column({
    type: 'int',
    unique: false,
    nullable: true,
    comment:
      'Dexterity is used to calculate chance to deal damage to an opponent',
  })
  dexterity: number;

  @Column({
    type: 'int',
    unique: false,
    nullable: true,
    comment: "Dodge is used to calculate chance to dodge an opponent's attack",
  })
  dodge: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    unique: false,
    comment:
      'This text appears on the loading screen for monsters and in selection for character',
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: false,
    nullable: true,
  })
  url_image: string;

  @Column({
    type: 'int',
    nullable: true,
    default: 1,
    comment:
      'Difficulty is used to sort PersonModel by their difficulty to be beaten',
  })
  difficulty: number;

  @Column({
    type: 'enum',
    nullable: false,
    comment: 'Category of PersonModel',
  })
  category: Category;

  // --------------TIMESTAMPS
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;

  // --------------RELATIONS
  @OneToMany(() => Person, (person) => person.personModel)
  persons: Person[];
}
