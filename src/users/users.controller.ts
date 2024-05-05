import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';
import { updateUser } from './dto/userUpdate.dto';
import { createUser } from './dto/users.dto';

@Controller('/users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getUsers(@Res() response: Response, @Query() query: any) {
    return response.status(200).json({ data: this.userService.getUsers() });
  }
  @Get('/:id')
  getUser(@Param('id') id: string) {
    return this.userService.getUser(id)
      ? { data: this.userService.getUser(id) }
      : new NotFoundException('User not found');
  }
  @Post()
  createUser(@Body() body: createUser) {
    //req, y res de express
    return this.userService.cretaeUser(body);
  }
  @Put()
  updateUser(@Body() body: updateUser) {
    return this.userService.updateUser(body);
  }
  @Patch()
  updateUserName() {}
  @Delete("/:id")
  deleteUser(@Param('id') id: string) {
    console.log("id eliminar",id);
    
    return this.userService.deleteUser(id);
  }
}
