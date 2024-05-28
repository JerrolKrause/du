import { Models } from '$shared';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import LOANS from '../../../../../../../../../../assets/mock-data/loans';
// import { environment } from '$env'; // Base api url

/**
 * Route specific api stores
 * By default they are not injected in root since they are only needed by this route
 */
@Injectable()
export class RouteApiService {
  manualIncomeVerificationMethodsLoadingState$ = new BehaviorSubject<Models.LoadingState>(Models.LoadingState.Unloaded);
  manualIncomeVerificationMethods$ = new BehaviorSubject<Models.ManualIncomeVerificationMethod[] | undefined>(undefined);
  manualIncomeVerificationMethodsErrorMessage$ = new BehaviorSubject<string>('');

  listManualIncomeVerificationMethods(loanId: number) {
    this.manualIncomeVerificationMethodsLoadingState$.next(Models.LoadingState.Loading);
    this.manualIncomeVerificationMethods$.next([]);
    this.manualIncomeVerificationMethodsErrorMessage$.next('');

    setTimeout(() => {
      const loan = LOANS.find(loan => loan.id === loanId);
      if (loan) {
        this.manualIncomeVerificationMethodsLoadingState$.next(Models.LoadingState.Success);
        this.manualIncomeVerificationMethods$.next([
          { id: 0, stub: 'paystub', label: 'Paystub' },
          { id: 1, stub: 'bank-statement', label: 'Bank Statement' },
          { id: 2, stub: 'tax-return', label: 'Tax Return' },
          { id: 3, stub: 'w2', label: 'W2' },
        ]);
      } else {
        this.manualIncomeVerificationMethodsLoadingState$.next(Models.LoadingState.Error);
        this.manualIncomeVerificationMethodsErrorMessage$.next('Loan not found');
      }
    }, 750);
  }
}
