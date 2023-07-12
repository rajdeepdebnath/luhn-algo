import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { readFile } from 'fs/promises';
import { EmailDto } from './emailDto';

@Injectable()
export class EmailService {
  constructor() {}

  async sendWelcomeEmail(emailDto: EmailDto) {
    const options = {
      from: 'admin@rajd.info',
      to: emailDto.email,
      subject: 'Welcome to CVV!!!',
      text: 'Welcome',
      html: '',
    };

    try {
      const html = await readFile('email/welcome.html', {
        encoding: 'utf8',
      });
      options.html = html.replace('$$__name__$$', emailDto.name);

      const body = Object.keys(options)
        .map((key, index) => `${key}=${encodeURIComponent(options[key])}`)
        .join('&');

      const response = await axios.post(
        `https://api.mailgun.net/v3/rajd.info/messages`,
        body,
        {
          auth: {
            username: 'api',
            password: 'f8c45e4d377cb40449253af2eaf583e3-262b213e-3def9f44',
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
