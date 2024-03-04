import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StatisticService } from './statistic.service';
import { CreateStatisticDto } from './dto/create-statistic.dto';
import { UpdateStatisticDto } from './dto/update-statistic.dto';

@Controller('statistic')
export class StatisticController {
  constructor(private readonly statisticService: StatisticService) {}

  @Post()
  create(@Body() createStatisticDto: CreateStatisticDto) {
    return this.statisticService.create(createStatisticDto);
  }

  @Get()
  findAll() {
    return this.statisticService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statisticService.findOne(id);
  }

  @Get('user/:user')
  getStatisticByUserId(@Param('user') userId: string) {
    return this.statisticService.getStatisticByUserId(userId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStatisticDto: UpdateStatisticDto,
  ) {
    return this.statisticService.update(id, updateStatisticDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statisticService.remove(id);
  }

  @Patch('battleWin/:idUser/:typeMonster')
  battleWin(
    @Param('idUser') idUser: string,
    @Param('typeMonster') typeMonster: string,
  ) {
    return this.statisticService.battleWin(idUser, typeMonster);
  }

  @Patch('campaignOver/:idUser/:status')
  campaignOver(
    @Param('idUser') idUser: string,
    @Param('status') status: string,
  ) {
    return this.statisticService.campaignOver(idUser, status);
  }
}
