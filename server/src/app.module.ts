import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { SmsModule } from './sms/sms.module';
import { WebhookModule } from './webhook/webhook.module';
import { ValidationModule } from './validation/validation.module';

@Module({
  imports: [EmailModule, SmsModule, WebhookModule, ValidationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
