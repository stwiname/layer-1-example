import { Inject, Injectable } from '@nestjs/common';
import { IApiWrapper } from './IApiWrapper';

@Injectable()
export class AppService {

  constructor(
    @Inject('IApiWrapper') private readonly apiWrapper: IApiWrapper,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }
}
