import { Injectable } from "@nestjs/common/decorators";
import { IApiWrapper } from "./IApiWrapper";


@Injectable()
export class ApiSubstrate implements IApiWrapper {

  getBlock(num: number): Promise<any> {
    throw new Error('not implemented');
  }
}
