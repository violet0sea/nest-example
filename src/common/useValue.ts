import { connection } from './connection';
import { Module } from '@nestjs/common';

const connectionProvider = {
  provide: 'CONNECTION',
  useValue: connection,
};

@Module({
  providers: [connectionProvider],
})
export class ApplicationModule {}
