import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidationService {
  validateCreditCard(creditCardNo: number) {
    const digitArr = creditCardNo.toString().split('');
    let sum = 0,
      i = 0;
    for (i = digitArr.length - 2; i >= 0; --i) {
      if ((i + 1) % 2 === 0) {
        const doubleElem = 2 * +digitArr[i];
        sum += parseInt((doubleElem / 10).toString()) + (doubleElem % 10);
      } else {
        sum += +digitArr[i];
      }
    }

    return sum !== 0 && sum % 10 === 0;
  }
}
