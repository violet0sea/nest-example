import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class setUserinfoMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    req['user'] = {
      roles: [req.headers.bearer || ''],
    };
    console.log(req['user'], 11111);
    next();
  }
}
