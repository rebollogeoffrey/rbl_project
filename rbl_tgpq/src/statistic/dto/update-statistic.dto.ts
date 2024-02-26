import { PartialType } from '@nestjs/mapped-types';
import { CreateStatisticDto } from './create-statistic.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateStatisticDto extends PartialType(CreateStatisticDto) {
  @IsOptional()
  @IsString()
  id?: string;
}
