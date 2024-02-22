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
  create(@Body() createPersonDto: CreatePersonDto) {
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

  @Patch(':id')
  update(
    @Param('id') idPerson: string,
    @Body() updatePersonDto: UpdatePersonDto,
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
    @Param('mode') mode: boolean,
  ) {
    return this.personService.battle(idHero, idMonster, mode);
  }

  @Patch('startBattle/:hero/:user')
  startBattle(@Param('hero') idHero: string, @Param('user') idUser: string) {
    return this.personService.startBattle(idHero, idUser);
  }
}
