import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RobotsService } from './robots.service';
import { Robot } from '@prisma/client';
import { CreateRobotDto } from './dto/create-robot.dto';
import { UpdateRobotDto } from './dto/update-robot.dto';

@Controller('robots')
export class RobotsController {
  constructor(private readonly robotsService: RobotsService) {}

  @Post()
  async create(@Body() createRobotDto: CreateRobotDto): Promise<Robot> {
    return this.robotsService.create(createRobotDto);
  }

  @Get()
  async findAll(): Promise<Robot[]> {
    return this.robotsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Robot | null> {
    return this.robotsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRobotDto: UpdateRobotDto): Promise<Robot> {
    return this.robotsService.update(id, updateRobotDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Robot> {
    return this.robotsService.remove(id);
  }
}
