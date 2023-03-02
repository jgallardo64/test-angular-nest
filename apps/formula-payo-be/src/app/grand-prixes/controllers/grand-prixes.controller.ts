import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GrandPrixesService } from '../services/grand-prixes.service';

@Controller('grand-prixes')
export class GrandPrixesController {
  constructor(private readonly grandPrixesService: GrandPrixesService) {}

  @Post()
  create(@Body() createGrandPrixDto: any) {
    return this.grandPrixesService.create(createGrandPrixDto);
  }

  @Get()
  findAll() {
    return this.grandPrixesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grandPrixesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGrandPrixDto: any
  ) {
    return this.grandPrixesService.update(+id, updateGrandPrixDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grandPrixesService.remove(+id);
  }
}
