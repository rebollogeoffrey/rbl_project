import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';
import { Game } from '../../game/entities/game.entity';
import { Inventory } from '../../inventory/entities/inventory.entity';

export enum Stat_affected {
  DEXTERITY = 'Dexterity',
  DODGE = 'Dodge',
  GOLD = 'Gold',
  HEALTH = 'Current health',
  HEALTH_MAX = 'Health maximum',
  NOTHING = 'Nothing',
  STRENGTH = 'Strength',
}

export enum Type_item {
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
    enum: Stat_affected,
    default: Stat_affected.NOTHING,
  })
  stat_affected: Stat_affected;

  @Column({
    type: 'enum',
    nullable: false,
    comment: 'Define what is the item',
    enum: Type_item,
  })
  type: Type_item;

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
  @ManyToOne(() => Game, (game) => game.items)
  game: Game;

  @ManyToMany(() => Inventory, (inventories) => inventories.items)
  inventories: Inventory[];
}
