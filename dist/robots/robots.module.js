"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RobotsModule = void 0;
const common_1 = require("@nestjs/common");
const robots_service_1 = require("./robots.service");
const robots_controller_1 = require("./robots.controller");
const prisma_service_1 = require("../prisma/prisma.service");
let RobotsModule = class RobotsModule {
};
exports.RobotsModule = RobotsModule;
exports.RobotsModule = RobotsModule = __decorate([
    (0, common_1.Module)({
        controllers: [robots_controller_1.RobotsController],
        providers: [robots_service_1.RobotsService, prisma_service_1.PrismaService],
    })
], RobotsModule);
//# sourceMappingURL=robots.module.js.map