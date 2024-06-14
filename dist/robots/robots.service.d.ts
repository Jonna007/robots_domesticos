import { CreateRobotDto } from './dto/create-robot.dto';
import { UpdateRobotDto } from './dto/update-robot.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Robot } from '@prisma/client';
export declare class RobotsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createRobotDto: CreateRobotDto): Promise<Robot>;
    findAll(): Promise<Robot[]>;
    findOne(id: string): Promise<Robot | null>;
    update(id: string, updateRobotDto: UpdateRobotDto): Promise<Robot>;
    remove(id: string): Promise<Robot>;
}
