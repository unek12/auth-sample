import {Body, Controller, Get, Param, ParseIntPipe, Post, Req, UseGuards} from '@nestjs/common';
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import {accessTokenGuard} from "../../guards/accessToken.guard";
import {Request} from "express";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @UseGuards(accessTokenGuard)
  @Get()
  getAll(@Req() req: Request) {
    console.log(req.query)
    return this.usersService.findAll()
  }

  @UseGuards(accessTokenGuard)
  @Post()
  create(@Body() createUser: CreateUserDto) {
    return this.usersService.create(createUser)
  }

  @UseGuards(accessTokenGuard)
  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findById(id)
  }
}
