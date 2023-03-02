import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

@Injectable()
export class ResultsService {
  create(createResultDto: any) {
    return 'This action adds a new result';
  }

  findAll() {
    return prisma.result.findMany({
      include: {
        driver: true,
      },
    })
    }

  findOne(id: number) {
    return `This action returns a #${id} result`;
  }

  update(id: number, updateResultDto: any) {
    return `This action updates a #${id} result`;
  }

  remove(id: number) {
    return `This action removes a #${id} result`;
  }
}
