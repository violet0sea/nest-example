// controllers are responsible for handling incoming requests and return responses to the client
import { Controller, Get, Param, Req, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { CreateCatDto } from './cats/dto/create-cat.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
