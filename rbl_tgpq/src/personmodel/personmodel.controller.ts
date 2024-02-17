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

@Controller('personmodel')
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
  findById(@Param('id') id: string) {
    return this.personModelService.findById(id);
  }

  @Patch(':id')
  update(
    @Param('id') idPersonModel: string,
    @Body() updatePersonModelDto: UpdatePersonModelDto,
  ) {
    return this.personModelService.update(idPersonModel, updatePersonModelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personModelService.remove(id);
  }
}
