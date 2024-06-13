import { IsString, IsNumber, IsArray } from 'class-validator';
import { Robot } from '../entities/robot.entity';

export class CreateRobotDto extends Robot {
  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsNumber()
  price: number;

  @IsArray()
  @IsString({ each: true })
  features: string[];
}
