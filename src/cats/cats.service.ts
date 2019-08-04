import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { Cat } from './interfaces/cat';
@Injectable()
export class CatsService implements OnApplicationShutdown {
  private readonly cats: Cat[] = [];
  create(cat: Cat) {
    this.cats.push(cat);
  }
  onApplicationShutdown(signal: string) {
    console.log(signal); // e.g. "SIGINT"
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
