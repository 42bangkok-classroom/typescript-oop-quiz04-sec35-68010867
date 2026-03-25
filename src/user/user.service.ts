import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import { IUser } from './user.interface';

@Injectable()
export class UserService {
  test(): string[] {
    return [];
  }
  async findAll(): Promise<IUser[]> {
    // ใช้ await เพื่อรออ่านไฟล์โดยไม่กระทบต่อ Process อื่น
    const data = await fs.readFile('./data/users.json', 'utf8');
    return JSON.parse(data);
  }
}

