import { PartialType } from '@nestjs/mapped-types';
import { CreateRobotDto } from './create-robot.dto';
import { Prisma } from '@prisma/client';

export class UpdateRobotDto extends PartialType(CreateRobotDto) implements Prisma.RobotUpdateInput {}
