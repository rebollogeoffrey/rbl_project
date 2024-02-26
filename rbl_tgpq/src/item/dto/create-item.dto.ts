// create-item.dto.ts

import { IsNotEmpty, IsString, IsUrl, IsNumber, IsEnum } from 'class-validator';
import { Stat_affected, Type_item } from '../entities/item.entity';

export class CreateItemDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsUrl()
  @IsNotEmpty()
  readonly url_image: string;

  @IsNotEmpty()
  @IsEnum(Stat_affected)
  readonly stat_affected: Stat_affected;

  @IsNotEmpty()
  @IsNumber()
  readonly value: number;

  @IsNotEmpty()
  @IsEnum(Type_item)
  readonly type: Type_item;
}
