import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Driver } from '@prisma/client';
import { DriversService } from '../services/drivers.service';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Get()
  async getDrivers() {
    return this.driversService.getDrivers()
  }

  @Get(':id')
  async getOneDriver(@Param('id') id: string) {
    return this.driversService.getOneDriver({
      id: Number(id),
    });
  }

  @Post()
  async createDriver(
    @Body()
    driverData: {
      name: string,
      image: string,
      teamId: number,
    }
  ): Promise<Driver> {
    const { teamId, ...data } = driverData;
    return this.driversService.createDriver({
      ...data,
      team: {
        connect: { id: teamId },
      },
    });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDriverDto: any) {
    return this.driversService.updateDriver({
      where: { id: Number(id) },
      data: { ...updateDriverDto },
    });
  }

  @Delete(':id')
  async removeDriver(@Param('id') id: string) {
    return this.driversService.removeDriver(+id);
  }
}