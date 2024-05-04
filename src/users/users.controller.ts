import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get('/')
  getUsers() {
    return { data: this.userService.getUsers() };
  }
  @Get('/')
  index() {
    return { mensaje: 'Servidor con nestjs by leowader' };
  }
}
