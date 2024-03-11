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
import { Category } from './entities/personmodel.entity';

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
    @Body('personModel') updatePersonModelDto: UpdatePersonModelDto,
  ) {
    return this.personModelService.update(idPersonModel, updatePersonModelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personModelService.remove(id);
  }

  @Get('category/:category')
  getPersonModelByCategory(@Param('category') category: Category) {
    return this.personModelService.getPersonModelByCategory(category);
  }

  @Get('gethero/:name')
  getHero(@Param('name') name: string) {
    return this.personModelService.getHero(name);
  }
}
