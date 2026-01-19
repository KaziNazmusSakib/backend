import { IsString } from 'class-validator';

export class AdminActionDto {
  @IsString()
  action: string;
}