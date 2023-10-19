import { Module } from '@nestjs/common';
import { PersonnageService } from './personnage.service';
import { PersonnageController } from './personnage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personnage } from './entities/personnage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Personnage])],
  controllers: [PersonnageController],
  providers: [PersonnageService],
})
export class PersonnageModule {}
