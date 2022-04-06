import { Injectable } from '@nestjs/common';
import { IApiWrapper } from '@subql/node-substrate/src/IApiWrapper';

@Injectable()
export class ApiAvalanche implements IApiWrapper {

  getBlock(num: number): Promise<any> {
    throw new Error('not implemented');
  }
}
