import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class GrandPrixesService {
  create(createGrandPrixDto: any) {
    return 'This action adds a new grandPrix';
  }

  findAll() {
    return prisma.grandPrix.findMany({
      include: {
        results: true,
        track: true
      },
    })
    }

  findOne(id: number) {
    return `This action returns a #${id} grandPrix`;
  }

  update(id: number, updateGrandPrixDto: any) {
    return `This action updates a #${id} grandPrix`;
  }

  remove(id: number) {
    return `This action removes a #${id} grandPrix`;
  }
}
