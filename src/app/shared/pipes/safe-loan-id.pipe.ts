import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safeLoanId',
  pure: true,
})
export class SafeLoanIdPipe implements PipeTransform {
  transform(value: number): string {
    const loanId = value.toString();
    return loanId.length > 4 ? '...' + loanId.slice(-4) : loanId;
  }
}
