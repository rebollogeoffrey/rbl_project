import { Item } from '../../item/entities/item.entity';
import { PersonModel } from '../../personmodel/entities/personmodel.entity';
import {
  Column,
  CreateDateColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Person {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'int',
    unique: false,
    default: 0,
  })
  gold: number;

  @Column({
    type: 'int',
    unique: false,
    default: 100,
  })
  health: number;

  @Column({
    type: 'string',
    unique: false,
  })
  userId: string;
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

  @ManyToMany(() => Item, (item) => item.inventories)
  @JoinTable()
  items: Item[];

  @ManyToOne(() => PersonModel, (personModel) => personModel.persons)
  personModel: PersonModel;
}
