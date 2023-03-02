import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class TracksService {
  create(createTrackDto: any) {
    return 'This action adds a new track';
  }

  findAll() {
    return prisma.track.findMany({
      include: {
        grandPrixes: true
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} track`;
  }

  update(id: number, updateTrackDto: any) {
    return `This action updates a #${id} track`;
  }

  remove(id: number) {
    return `This action removes a #${id} track`;
  }
}
