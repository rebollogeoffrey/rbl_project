import { Category } from '../../personmodel/entities/personmodel.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Statistic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'int',
    default: 0,
  })
  nb_win: number;

  @Column({
    type: 'int',
    default: 0,
  })
  nb_lose: number;

  @Column({
    type: 'json',
    array: false,
  })
  kills: Array<{ category: Category; nb_killed: number }>;

  @Column({
    type: 'varchar',
    default: 0,
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
}
