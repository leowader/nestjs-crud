import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';
import { userType } from 'src/types/types';

@Controller('/users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get('/')
  getUsers(@Req() req: Request, @Res() response: Response) {
    return response.status(200).json({ data: this.userService.getUsers() });
  }
  @Post()
  createUser(@Req() req: Request) {
    //req, y res de express
    const { id, name, year } = req.body;
    return this.userService.cretaeUser({ id, name, year });
  }
  @Put()
  updateUser(@Body() body: userType) {
    //body nest
    return this.userService.updateUser(body);
  }
  @Patch()
  updateUserName() {}
  @Delete()
  deleteUser() {
    return this.userService.deleteUser();
  }
}
