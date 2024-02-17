import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { Item } from '../../item/entities/item.entity';
import { PersonModel } from '../../personmodel/entities/personmodel.entity';

export class CreatePersonDto {
  @IsNumber()
  @IsNotEmpty()
  readonly gold: number;

  @IsNumber()
  @IsNotEmpty()
  readonly health: number;

  @IsString()
  @IsNotEmpty()
  readonly userId: string;

  @IsNotEmpty()
  readonly personModel: PersonModel;

  @IsNotEmpty()
  readonly items: Item[];
}
