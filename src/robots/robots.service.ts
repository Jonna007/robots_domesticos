import { Injectable } from '@nestjs/common';
import { CreateRobotDto } from './dto/create-robot.dto';
import { UpdateRobotDto } from './dto/update-robot.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Robot, Prisma } from '@prisma/client';

@Injectable()
export class RobotsService {
  constructor(private prisma: PrismaService) {}

  async create(createRobotDto: CreateRobotDto): Promise<Robot> {
    const data: Prisma.RobotCreateInput = {
      ...createRobotDto,
    };
    return this.prisma.robot.create({ data });
  }

  async findAll(): Promise<Robot[]> {
    return this.prisma.robot.findMany();
  }

  async findOne(id: string): Promise<Robot | null> {
    return this.prisma.robot.findUnique({ where: { id } });
  }

  async update(id: string, updateRobotDto: UpdateRobotDto): Promise<Robot> {
    const data: Prisma.RobotUpdateInput = {
      ...updateRobotDto,
    };
    return this.prisma.robot.update({ where: { id }, data });
  }

  async remove(id: string): Promise<Robot> {
    return this.prisma.robot.delete({ where: { id } });
  }
}
