import { Injectable } from '@nestjs/common';
import { CreateStatisticDto } from './dto/create-statistic.dto';
import { UpdateStatisticDto } from './dto/update-statistic.dto';
import { Statistic } from './entities/statistic.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StatisticService {
  constructor(
    @InjectRepository(Statistic)
    private statisticRepository: Repository<Statistic>,
  ) {}

  create(createStatistic: CreateStatisticDto) {
    return this.statisticRepository.create(createStatistic);
  }

  findAll() {
    return this.statisticRepository.find();
  }

  findOne(id: string) {
    return this.statisticRepository.findOne({ where: [{ id }] });
  }

  async update(idStat: string, updateStatistic: UpdateStatisticDto) {
    updateStatistic = { id: idStat, ...updateStatistic };
    return this.statisticRepository.save(updateStatistic);
  }

  async remove(id: string) {
    const result = await this.statisticRepository.delete(id);
    if (result.affected === 1) {
      return 'Statistic Deleted';
    } else return 'Statistic Not Found';
  }

  async getStatisticByUserId(idUser: string): Promise<Statistic[] | undefined> {
    return this.statisticRepository.findBy({ userId: idUser });
  }
}
