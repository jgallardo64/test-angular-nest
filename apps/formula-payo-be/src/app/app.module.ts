import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriversModule } from './drivers/drivers.module';
import { GrandPrixesModule } from './grand-prixes/grand-prixes.module';
import { ResultsModule } from './results/results.module';
import { TeamsModule } from './teams/teams.module';
import { TracksModule } from './tracks/tracks.module';

@Module({
  imports: [
    DriversModule,
    TeamsModule,
    ResultsModule,
    GrandPrixesModule,
    TracksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
