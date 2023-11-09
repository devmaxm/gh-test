import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv'
dotenv.config()


@Injectable()
export class AppService {
  getHello(): string {
    console.log(process.env.ENV_TEST)
    return process.env.ENV_TEST;
  }
}
