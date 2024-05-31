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
  manualIdentityVerificationMethodsLoadingState$ = new BehaviorSubject<Models.LoadingState>(Models.LoadingState.Unloaded);
  manualIdentityVerificationMethods$ = new BehaviorSubject<Models.GenericVerificationOption[] | undefined>(undefined);
  manualIdentityVerificationMethodsErrorMessage$ = new BehaviorSubject<string>('');

  listManualIdentityVerificationMethods(loanId: number) {
    this.manualIdentityVerificationMethodsLoadingState$.next(Models.LoadingState.Loading);
    this.manualIdentityVerificationMethods$.next([]);
    this.manualIdentityVerificationMethodsErrorMessage$.next('');

    setTimeout(() => {
      const loan = LOANS.find(loan => loan.id === loanId);
      if (loan) {
        this.manualIdentityVerificationMethods$.next([
          { id: 0, stub: 'paystub', label: 'Paystub' },
          { id: 1, stub: 'bank-statement', label: 'Bank Statement' },
          { id: 2, stub: 'tax-return', label: 'Tax Return' },
          { id: 3, stub: 'w2', label: 'W2' },
        ]);
        this.manualIdentityVerificationMethodsLoadingState$.next(Models.LoadingState.Success);
      } else {
        this.manualIdentityVerificationMethodsErrorMessage$.next('Loan not found');
        this.manualIdentityVerificationMethodsLoadingState$.next(Models.LoadingState.Error);
      }
    }, 750);
  }
}
