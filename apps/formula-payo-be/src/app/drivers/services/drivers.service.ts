import { Injectable } from '@nestjs/common'
import { PrismaClient, Driver, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class DriversService {
  async getDrivers(): Promise<Driver[]> {
    return prisma.driver.findMany({
      include: {
        team: true,
        results: {
          include: {
            grandPrix: {
              include: {
                track: true
              }
            } 
          }
        }
      },
    })
  }

  async getOneDriver(driverWhereUniqueInput: Prisma.DriverWhereUniqueInput): Promise<Driver> {
    return prisma.driver.findUnique({
      where: driverWhereUniqueInput,
      include: {
        team: true,
        results: {
          include: {
            grandPrix: {
              include: {
                track: true
              }
            } 
          }
        }
      },
      })
  }

  async createDriver(createDriverDto: Prisma.DriverCreateInput) {
    return prisma.driver.create({
      data: createDriverDto
    });
  }

  async updateDriver(params: {
    where: Prisma.DriverWhereUniqueInput;
    data: Prisma.DriverUpdateInput;
  }): Promise<Driver> {
    const { where, data } = params;
    return prisma.driver.update({
      data,
      where,
    });
  }

  async removeDriver(id: number) {
    return prisma.driver.delete({ where: { id } });
  }
}