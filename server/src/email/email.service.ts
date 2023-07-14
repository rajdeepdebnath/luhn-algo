import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { readFile } from 'fs/promises';
import { EmailDto } from './emailDto';

@Injectable()
export class EmailService {
  async sendEmail(emailDto: EmailDto) {
    const options = {
      from: 'admin@rajd.info',
      to: emailDto.email,
      subject: 'Your CVV Result!!!',
      text: 'CVV Result!!!',
      html: '',
    };

    try {
      const html = await readFile('assets/welcome.html', {
        encoding: 'utf8',
      });
      const bgcolor = emailDto.isValid ? '#3c8611' : '#742326';
      options.html = html
        .replace('$$__LINK__$$', process.env.REACT_DEPLOYED_URL)
        .replace('$$__BGCOLOR__$$', bgcolor)
        .replace('$$__TEXT__$$', emailDto.text);

      const body = Object.keys(options)
        .map((key) => `${key}=${encodeURIComponent(options[key])}`)
        .join('&');

      const response = await axios.post(
        `https://api.mailgun.net/v3/rajd.info/messages`,
        body,
        {
          auth: {
            username: 'api',
            password: process.env.MAILGUN_API_KEY,
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
