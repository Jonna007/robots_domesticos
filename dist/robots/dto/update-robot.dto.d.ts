import { CreateRobotDto } from './create-robot.dto';
import { Prisma } from '@prisma/client';
declare const UpdateRobotDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateRobotDto>>;
export declare class UpdateRobotDto extends UpdateRobotDto_base implements Prisma.RobotUpdateInput {
}
export {};
