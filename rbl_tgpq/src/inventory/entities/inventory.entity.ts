import { Item } from '../../item/entities/item.entity';
import { Personnage } from '../../personnage/entities/personnage.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'int',
    unique: false,
    default: 0,
  })
  gold: number;

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

  @ManyToMany(() => Item, (items) => items.inventories)
  @JoinTable()
  items: Item[];

  @ManyToOne(() => Personnage, (personnage) => personnage.inventories)
  personnage: Personnage;
}
