// controllers are responsible for handling incoming requests and return responses to the client
import {
  Controller,
  Get,
  Param,
  Req,
  Query,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UseFilters,
  ForbiddenException,
  UsePipes,
  UseGuards,
  SetMetadata,
  UseInterceptors,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat';
import { HttpExceptionFilter } from '../common/http_exception.filter';
import { ValidationPipe } from './validation.pipe';
import { RolesGuard } from '../common/roles.guard';
import { Roles } from '../common/roles.decorator';
import { LoggingInterceptor } from '../common/logging.interceptor';
import { TransformInterceptor } from './transform.interceptor';
import { User } from '../common/user.decorator';

@Controller('cats')
@UseInterceptors(LoggingInterceptor)
@UseGuards(RolesGuard)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get(':id')
  @UseFilters(HttpExceptionFilter)
  findOne(@Param() params, @Req() req: Request, @Query() query): string {
    if (!/^\d+$/.test(params.id)) {
      throw new ForbiddenException();
    }
    return 'find ' + params.id;
  }
  @Get()
  @UseInterceptors(TransformInterceptor)
  async finaAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
  @Post()
  @Roles('admin')
  @UsePipes(ValidationPipe)
  async createOne(@Body() createcatDto: CreateCatDto, @User() user: any) {
    console.log('user', user);
    this.catsService.create(createcatDto);
  }
}
