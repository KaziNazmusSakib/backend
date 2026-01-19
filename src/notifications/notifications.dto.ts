import { IsString } from 'class-validator';

export class CreateNotificationDto {
  @IsString()
  message: string;

  @IsString()
  type: string;

  @IsString()
  userId: string;
}