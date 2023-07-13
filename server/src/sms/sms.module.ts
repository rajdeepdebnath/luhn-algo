import { Module } from '@nestjs/common';
import { SmsController } from './sms.controller';
import { SmsService } from './sms.service';
import { ValidationModule } from 'src/validation/validation.module';
import { ValidationService } from 'src/validation/validation.service';

@Module({
  imports: [ValidationModule],
  controllers: [SmsController],
  providers: [SmsService, ValidationService],
})
export class SmsModule {}
