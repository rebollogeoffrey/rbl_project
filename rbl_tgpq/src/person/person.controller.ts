import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body('creationHero') createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get()
  findAll() {
    return this.personService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.personService.findById(id);
  }

  @Get('user/:id')
  findByUserId(@Param('id') idUser: string) {
    return this.personService.getPersonByUserId(idUser);
  }

  @Delete('user/:id')
  deleteByYserId(@Param('id') idUser: string) {
    return this.personService.deletePersonByUserId(idUser);
  }

  @Patch(':id')
  update(
    @Param('id') idPerson: string,
    @Body('person') updatePersonDto: UpdatePersonDto,
  ) {
    return this.personService.update(idPerson, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personService.remove(id);
  }

  @Patch('battle/:hero/:monster/:mode')
  battle(
    @Param('hero') idHero: string,
    @Param('monster') idMonster: string,
    @Param('mode') mode: string,
  ) {
    return this.personService.battle(idHero, idMonster, mode);
  }

  @Patch('createHero/:user')
  createHero(@Param('user') idUser: string) {
    return this.personService.createHero(idUser);
  }

  @Patch('createMonster/:user')
  createMonster(@Param('user') idUser: string) {
    return this.personService.createMonster(idUser);
  }

  @Patch('shop/:hero/:item')
  shop(@Param('hero') idHero: string, @Param('item') idItem: string) {
    return this.personService.shop(idHero, idItem);
  }
}
