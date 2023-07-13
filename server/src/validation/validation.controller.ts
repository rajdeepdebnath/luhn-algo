import { Controller, Get, Query } from '@nestjs/common';
import { ValidationService } from './validation.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('credit card')
@Controller('validation')
export class ValidationController {
  constructor(private validationService: ValidationService) {}

  @Get('/')
  validateCreditCard(@Query('creditCardNo') creditCardNo: number) {
    return this.validationService.validateCreditCard(creditCardNo);
  }
}
