import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PersonModel } from '../../personmodel/entities/personmodel.entity';
import { Item } from '../../item/entities/item.entity';

export class FightPersonDto {
  @IsString()
  @IsNotEmpty()
  readonly id: string;

  @IsNumber()
  readonly gold: number;

  @IsNotEmpty()
  @IsNumber()
  health: number;

  @IsNotEmpty()
  @IsString()
  readonly userId: string;

  @IsNotEmpty()
  readonly personModel: PersonModel;

  @IsNotEmpty()
  readonly items: Item[];
}
