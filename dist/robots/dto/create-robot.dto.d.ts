import { Robot } from '../entities/robot.entity';
export declare class CreateRobotDto extends Robot {
    name: string;
    type: string;
    price: number;
    features: string[];
}
