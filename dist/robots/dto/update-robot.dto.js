"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRobotDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_robot_dto_1 = require("./create-robot.dto");
class UpdateRobotDto extends (0, mapped_types_1.PartialType)(create_robot_dto_1.CreateRobotDto) {
}
exports.UpdateRobotDto = UpdateRobotDto;
//# sourceMappingURL=update-robot.dto.js.map