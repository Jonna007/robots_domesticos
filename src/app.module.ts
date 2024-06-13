import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RobotsModule } from './robots/robots.module';
import { PrismaService } from './prisma/prisma.service';
@Module({
  imports: [PrismaModule, RobotsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
