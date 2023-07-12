import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { SmsModule } from './sms/sms.module';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [EmailModule, SmsModule, WebhookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
