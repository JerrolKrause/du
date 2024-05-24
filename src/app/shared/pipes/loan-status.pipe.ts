import { Pipe, PipeTransform } from '@angular/core';
import { Models } from '../models/global.models';

@Pipe({
  name: 'loanStatus',
  pure: true,
})
export class LoanStatusPipe implements PipeTransform {
  transform(value: Models.LoanStatus): string {
    switch (value) {
      case Models.LoanStatus.Pending:
        return 'Pending';
      case Models.LoanStatus.Active:
        return 'Active';
      case Models.LoanStatus.PaidOff:
        return 'Paid Off';
      case Models.LoanStatus.Denied:
        return 'Denied';
      default:
        return 'Unknown';
    }
  }
}
