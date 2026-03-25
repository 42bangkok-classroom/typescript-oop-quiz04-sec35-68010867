import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

 
@Get()
  async getAllUsers(): Promise<IUser[]> {
    // รอรับข้อมูลจาก Service แล้วค่อย return ออกไป
    return await this.userService.findAll();
  }
}
