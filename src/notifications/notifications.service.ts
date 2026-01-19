import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './notifications.entity';
import { CreateNotificationDto } from './notifications.dto';
import { PusherService } from './pusher.provider';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification) private repo: Repository<Notification>,
    private pusherService: PusherService,
  ) {}

  async create(dto: CreateNotificationDto) {
    // ✅ Now message and type are valid because they exist in Notification entity
    const notification = this.repo.create({
      message: dto.message,
      type: dto.type,
      user: { id: parseInt(dto.userId) } as any,
    });

    const saved = await this.repo.save(notification);

    // 🔥 Trigger real-time event via Pusher
    await this.pusherService.trigger(`user-${dto.userId}`, 'new-notification', saved);

    return saved;
  }

  async findByUser(userId: number) {
    return this.repo.find({ where: { user: { id: userId } } });
  }
}