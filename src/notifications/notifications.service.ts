import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './notifications.entity';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private notificationRepo: Repository<Notification>,
  ) {}

  create(userId: number, message: string) {
    const notification = this.notificationRepo.create({ userId, message });
    return this.notificationRepo.save(notification);
  }

  findByUser(userId: number) {
    return this.notificationRepo.find({ where: { userId } });
  }
}