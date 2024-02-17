import {
  IsString,
  Length,
  IsNotEmpty,
  IsNumber,
  IsEnum,
} from 'class-validator';
import { Category } from '../entities/personmodel.entity';
import { Person } from '../../person/entities/person.entity';

export class CreatePersonModelDto {
  @IsString()
  @Length(1, 100)
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly health_max: number;

  @IsNotEmpty()
  @IsNumber()
  readonly strength: number;

  @IsNotEmpty()
  @IsNumber()
  readonly dexterity: number;

  @IsNotEmpty()
  @IsNumber()
  readonly dodge: number;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsString()
  readonly url_image: string;

  @IsNumber()
  readonly difficulty: number;

  @IsNotEmpty()
  @IsEnum(Category)
  readonly category: Category;

  @IsNotEmpty()
  readonly persons: Person[];
}
