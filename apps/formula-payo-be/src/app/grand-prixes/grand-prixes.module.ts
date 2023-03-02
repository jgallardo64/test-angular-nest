import { Module } from '@nestjs/common';
import { GrandPrixesService } from './services/grand-prixes.service';
import { GrandPrixesController } from './controllers/grand-prixes.controller';

@Module({
  controllers: [GrandPrixesController],
  providers: [GrandPrixesService],
})
export class GrandPrixesModule {}
