import { Controller, Delete, Get, Post, Put,Dependencies } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
@Dependencies(UserService)
export class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  @Post()
  create(req) {
    const user = req.body;
    return this.userService.create(user);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(req) {
    const id = req.params.id;
    return this.userService.findOne(id);
  }

  @Put(':id')
  update(req) {
    const id = req.params.id;
    const user = req.body;
    return this.userService.update(id, user);
  }

  @Delete(':id')
  delete(req) {
    const id = req.params.id;
    return this.userService.delete(id);
  }
}


