import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';
import { Person } from '../../person/entities/person.entity';

export enum Stat_affected {
  DEXTERITY = 'Dexterity',
  DODGE = 'Dodge',
  GOLD = 'Gold',
  HEALTH = 'Current health',
  HEALTH_MAX = 'Health maximum',
  NOTHING = 'Nothing',
  STRENGTH = 'Strength',
}

export enum Type {
  HAND,
  BODY,
  LEGS,
  POTION,
  OTHER,
}

@Entity()
export class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 80,
    nullable: false,
    unique: false,
  })
  name: string;

  @Column({
    type: 'int',
    unique: false,
    default: 0,
  })
  price: number;

  @Column({
    type: 'varchar',
    length: 255,
    unique: false,
    nullable: true,
  })
  url_image: string;

  @Column({
    type: 'enum',
    nullable: false,
    comment: 'Define what is affected by the item',
    default: Stat_affected.NOTHING,
  })
  stat_affected: Stat_affected;

  @Column({
    type: 'int',
    comment: 'Value of the stat_affected',
    default: 0,
  })
  value: number;

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
  @ManyToMany(() => Person, (person) => person.items)
  inventories: Person[];
}
