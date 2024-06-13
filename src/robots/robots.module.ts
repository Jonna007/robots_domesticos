import { Module } from '@nestjs/common';
import { RobotsService } from './robots.service';
import { RobotsController } from './robots.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [RobotsController],
  providers: [RobotsService, PrismaService],
})
export class RobotsModule {}
