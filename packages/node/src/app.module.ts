import { Module } from '@nestjs/common';
import { ApiSubstrate } from './ApiSubstrate';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: 'IApiWrapper',
      useClass: ApiSubstrate,
    },
    AppService,
  ],
})
export class AppModule {}
