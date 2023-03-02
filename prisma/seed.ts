import { Logger } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const tracksData: Prisma.TrackCreateInput[] = [
  {
    name: 'Bahrain International Circuit',
    firstGp: 2004,
    laps: 29,
    length: 5412,
    raceDistance: 156948,
    lapRecord: '1:26.486',
  },
  {
    name: 'Jeddah Corniche Circuit',
    firstGp: 2021,
    laps: 25,
    length: 6174,
    raceDistance: 154350,
    lapRecord: '1:30.050',
  },
  {
    name: 'Autodrono Enzo e Dino Ferrari',
    firstGp: 1980,
    laps: 32,
    length: 4909,
    raceDistance: 157088,
    lapRecord: '1:16.101',
  },
  {
    name: 'Shanghai International Circuit',
    firstGp: 2004,
    laps: 28,
    length: 5451,
    raceDistance: 152628,
    lapRecord: '1:32.394',
  },
  {
    name: 'Sochi Autodrom',
    firstGp: 2014,
    laps: 27,
    length: 5848,
    raceDistance: 157896,
    lapRecord: '1:33.940',
  },
  {
    name: 'Circuit de Monaco',
    firstGp: 1950,
    laps: 39,
    length: 3337,
    raceDistance: 130143,
    lapRecord: '1:09.828',
  },
  {
    name: 'Baku Ciry Circuit',
    firstGp: 2016,
    laps: 26,
    length: 6003,
    raceDistance: 156078,
    lapRecord: '1:41.247',
  },
  {
    name: 'Circuit Gilles-Villeneuve',
    firstGp: 1978,
    laps: 35,
    length: 4361,
    raceDistance: 152635,
    lapRecord: '1:10.547',
  },
  {
    name: 'Silverstone Circuit',
    firstGp: 1950,
    laps: 26,
    length: 5901,
    raceDistance: 153426,
    lapRecord: '1:27.075',
  },
  {
    name: 'Red Bull Ring',
    firstGp: 1970,
    laps: 36,
    length: 4326,
    raceDistance: 155736,
    lapRecord: '1:05.621',
  },
  {
    name: 'Circuit Paul Ricard',
    firstGp: 1971,
    laps: 27,
    length: 5861,
    raceDistance: 158247,
    lapRecord: '1:30.161',
  },
  {
    name: 'Hungaroring',
    firstGp: 1986,
    laps: 35,
    length: 4381,
    raceDistance: 153335,
    lapRecord: '1:19.063',
  },
  {
    name: 'Circuit de Spa-Francorchamps',
    firstGp: 1950,
    laps: 22,
    length: 7004,
    raceDistance: 154088,
    lapRecord: '1:44.792',
  },
  {
    name: 'Circuit Zaandvort',
    firstGp: 1952,
    laps: 36,
    length: 36,
    raceDistance: 155052,
    lapRecord: '1:11.002',
  },
  {
    name: 'Autodromo Nazionale Monza',
    firstGp: 1950,
    laps: 27,
    length: 5793,
    raceDistance: 156411,
    lapRecord: '1:21.222',
  },
  {
    name: 'Marina Bay Street Circuit',
    firstGp: 2008,
    laps: 31,
    length: 5073,
    raceDistance: 157263,
    lapRecord: '1:36.693',
  },
  {
    name: 'Suzuka International Racing Course',
    firstGp: 1987,
    laps: 27,
    length: 5807,
    raceDistance: 156789,
    lapRecord: '1:29.311',
  },
  {
    name: 'Circuit of the Americas',
    firstGp: 2012,
    laps: 28,
    length: 5513,
    raceDistance: 154364,
    lapRecord: '1:34.015',
  },
  {
    name: 'Autodromo Hermanos Rodriguez',
    firstGp: 1963,
    laps: 36,
    length: 4304,
    raceDistance: 154944,
    lapRecord: '1:15.952',
  },
  {
    name: 'Yas Marina Circuit',
    firstGp: 2009,
    laps: 28,
    length: 5554,
    raceDistance: 155512,
    lapRecord: '1:36.010',
  },
  {
    name: 'Autodromo José Carlos Pace',
    firstGp: 1973,
    laps: 36,
    length: 4309,
    raceDistance: 155124,
    lapRecord: '1:09.588',
  },
];

const teamsData: Prisma.TeamCreateInput[] = [
  {
    name: 'Red Bull',
    image: '',
  },
  {
    name: 'Aston Martin',
    image: '',
  },
  {
    name: 'Mercedes',
    image: ''
  },
  {
    name: 'Ferrari',
    image: ''
  },
  {
    name: 'Alpine',
    image: ''
  },
  {
    name: 'McLaren',
    image: ''
  },
  {
    name: 'Haas',
    image: ''
  },
  {
    name: 'Alfa Romeo',
    image: ''
  },
  {
    name: 'AlphaTauri',
    image: ''
  },
];

export const seed = async () => {
  Logger.log('Start seeding database..');

  Logger.log('Seeding tracks..');
  await Promise.all(
    tracksData.map(async (track) => {
      const trackExists = await prisma.track.findFirst({
        where: { name: track.name },
      });
      if (!trackExists) {
        await prisma.track.create({ data: track });
      }
    })
  );

  Logger.log('Seeding teams..');
  await Promise.all(
    teamsData.map(async (team) => {
      const teamExists = await prisma.team.findFirst({
        where: { name: team.name },
      });
      if (!teamExists) {
        await prisma.team.create({ data: team });
      }
    })
  );
};
