// controllers are responsible for handling incoming requests and return responses to the client
import { Controller, Get, Param, Req, Query, Post, Body } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get(':id')
  findOne(@Param() params, @Req() req: Request, @Query() query): string {
    console.log(req.path, query);
    return 'find ' + params.id;
  }
  @Get()
  async finaAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
  @Post()
  async createOne(@Body() createcatDto: CreateCatDto) {
    this.catsService.create(createcatDto);
  }
}
