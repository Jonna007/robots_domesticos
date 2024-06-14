import { RobotsService } from './robots.service';
import { Robot } from '@prisma/client';
import { CreateRobotDto } from './dto/create-robot.dto';
import { UpdateRobotDto } from './dto/update-robot.dto';
export declare class RobotsController {
    private readonly robotsService;
    constructor(robotsService: RobotsService);
    create(createRobotDto: CreateRobotDto): Promise<Robot>;
    findAll(): Promise<Robot[]>;
    findOne(id: string): Promise<Robot | null>;
    update(id: string, updateRobotDto: UpdateRobotDto): Promise<Robot>;
    remove(id: string): Promise<Robot>;
}
