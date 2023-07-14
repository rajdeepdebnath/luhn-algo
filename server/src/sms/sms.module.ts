import { Module } from '@nestjs/common';
import { SmsController } from './sms.controller';
import { SmsService } from './sms.service';
import { ValidationModule } from 'src/validation/validation.module';
import { ValidationService } from 'src/validation/validation.service';
import { TwilioModule } from 'src/twilio/twilio.module';
import { TwilioService } from 'src/twilio/twilio.service';

@Module({
  imports: [TwilioModule],
  controllers: [SmsController],
  providers: [SmsService, TwilioService],
})
export class SmsModule {}
