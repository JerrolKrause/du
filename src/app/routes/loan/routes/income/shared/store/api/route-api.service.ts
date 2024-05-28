import { Models } from '$shared';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import LOANS from '../../../../../../../../assets/mock-data/loans';
// import { environment } from '$env'; // Base api url

/**
 * Route specific api stores
 * By default they are not injected in root since they are only needed by this route
 */
@Injectable()
export class RouteApiService {
  incomeVerificationMethodsLoadingState$ = new BehaviorSubject<Models.LoadingState>(Models.LoadingState.Unloaded);
  incomeVerificationMethods$ = new BehaviorSubject<Models.IncomeVerificationMethod[]>([]);
  incomeVerificationMethodsErrorMessage$ = new BehaviorSubject<string>('');

  listIncomeVerificationMethods(loanId: number) {
    this.incomeVerificationMethodsLoadingState$.next(Models.LoadingState.Loading);
    this.incomeVerificationMethods$.next([]);
    this.incomeVerificationMethodsErrorMessage$.next('');

    setTimeout(() => {
      const loan = LOANS.find(loan => loan.id === loanId);
      if (loan) {
        this.incomeVerificationMethods$.next([Models.IncomeVerificationMethod.Plaid, Models.IncomeVerificationMethod.IRS]);
        this.incomeVerificationMethodsLoadingState$.next(Models.LoadingState.Success);
      } else {
        this.incomeVerificationMethodsErrorMessage$.next('Loan not found');
        this.incomeVerificationMethodsLoadingState$.next(Models.LoadingState.Error);
      }
    }, 500);
  }
}
