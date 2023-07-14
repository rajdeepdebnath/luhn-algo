import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { SmsModule } from './sms/sms.module';
import { WebhookModule } from './webhook/webhook.module';
import { ValidationModule } from './validation/validation.module';
import { ConfigModule } from '@nestjs/config';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { TwilioModule } from './twilio/twilio.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EmailModule,
    SmsModule,
    WebhookModule,
    ValidationModule,
    WhatsappModule,
    TwilioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
