import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from 'src/users/users.module';
import { LogsService } from 'src/logs/logs.service';
import { LogsModule } from 'src/logs/logs.module';

@Module({
  imports: [UsersModule, LogsModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
