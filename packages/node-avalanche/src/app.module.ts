import { Module } from '@nestjs/common';
import { ApiAvalanche } from './ApiAvalanche';
import { AppController, AppService } from '@subql/node-substrate';
// import { AppService } from '@subql/node-substrate/src/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [

    // Use the Avalanch implementation here
    {
      provide: 'IApiWrapper',
      useClass: ApiAvalanche,
    },
    AppService,
  ],
})
export class AppModule {}
