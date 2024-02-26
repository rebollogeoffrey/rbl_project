import {
  IsInt,
  IsNotEmpty,
  IsString,
  IsArray,
  ArrayMinSize,
  ValidateNested,
} from 'class-validator';
import { Category } from '../../personmodel/entities/personmodel.entity';

class Kill {
  @IsNotEmpty()
  @IsString()
  category: Category;

  @IsNotEmpty()
  @IsInt()
  nb_killed: number;
}

export class CreateStatisticDto {
  @IsInt()
  @IsNotEmpty()
  nb_win: number;

  @IsInt()
  @IsNotEmpty()
  nb_lose: number;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  kills: Kill[];

  @IsString()
  @IsNotEmpty()
  userId: string;
}
