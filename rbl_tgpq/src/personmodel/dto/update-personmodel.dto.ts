import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonModelDto } from './create-personmodel.dto';

export class UpdatePersonModelDto extends PartialType(CreatePersonModelDto) {}
