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
  identityVerificationMethodsLoadingState$ = new BehaviorSubject<Models.LoadingState>(Models.LoadingState.Unloaded);
  identityVerificationMethods$ = new BehaviorSubject<Models.IdentityVerificationMethod[]>([]);
  identityVerificationMethodsErrorMessage$ = new BehaviorSubject<string>('');

  listIdentityVerificationMethods(loanId: number) {
    this.identityVerificationMethodsLoadingState$.next(Models.LoadingState.Loading);
    this.identityVerificationMethods$.next([]);
    this.identityVerificationMethodsErrorMessage$.next('');

    setTimeout(() => {
      const loan = LOANS.find(loan => loan.id === loanId);
      if (loan) {
        this.identityVerificationMethods$.next([Models.IdentityVerificationMethod.Veriff]);
        this.identityVerificationMethodsLoadingState$.next(Models.LoadingState.Success);
      } else {
        this.identityVerificationMethodsErrorMessage$.next('Loan not found');
        this.identityVerificationMethodsLoadingState$.next(Models.LoadingState.Error);
      }
    }, 500);
  }
}
