import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonModelService } from './personmodel.service';
import { CreatePersonModelDto } from './dto/create-personmodel.dto';
import { UpdatePersonModelDto } from './dto/update-personmodel.dto';

@Controller('PersonModel')
export class PersonModelController {
  constructor(private readonly personModelService: PersonModelService) {}

  @Post()
  create(@Body() createPersonModelDto: CreatePersonModelDto) {
    return this.personModelService.create(createPersonModelDto);
  }

  @Get()
  findAll() {
    return this.personModelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personModelService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePersonModelDto: UpdatePersonModelDto,
  ) {
    return this.personModelService.update(+id, updatePersonModelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personModelService.remove(+id);
  }
}
