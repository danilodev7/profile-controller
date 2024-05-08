import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProfileService } from './profile/profile.service';
import { PrismaService } from './db/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, ProfileService],
})
export class AppModule {}
