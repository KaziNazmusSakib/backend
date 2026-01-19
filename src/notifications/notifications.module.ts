import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notification } from './notifications.entity';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { PusherService } from './pusher.provider';

@Module({
  imports: [TypeOrmModule.forFeature([Notification])],
  providers: [NotificationsService, PusherService],
  controllers: [NotificationsController],
})
export class NotificationsModule {}