import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { CatsModule } from './cats/cats.module';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { setUserinfoMiddleware } from './common/middlewares/set-userinfo.middleware';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://custom:0IMiNNOBduk3WAok@cluster0-1ojix.mongodb.net/event-react-dev?retryWrites=true&w=majority',
    ),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, setUserinfoMiddleware).forRoutes('/');
  }
}
