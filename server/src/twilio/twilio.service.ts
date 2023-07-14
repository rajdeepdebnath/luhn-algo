import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';

@Injectable()
export class TwilioService {
  client: Twilio;

  constructor() {
    this.client = new Twilio(
      process.env.TWILIO_API_KEY,
      process.env.TWILIO_AUTH_TOKEN,
    );
  }
}
