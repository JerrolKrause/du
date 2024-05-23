import { Models } from '$shared';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import LOANS from '../../../../../../assets/mock-data/loans';
// import { environment } from '$env'; // Base api url

/**
 * Route specific api stores
 * By default they are not injected in root since they are only needed by this route
 */
@Injectable()
export class RouteApiService {
  loanDetailsLoadingState$ = new BehaviorSubject<Models.LoadingState>(Models.LoadingState.Unloaded);
  loanDetails$ = new BehaviorSubject<Models.LoanDetails | null>(null);
  loanDetailsErrorMessage$ = new BehaviorSubject<string>('');

  getLoanDetails(loanId: number) {
    this.loanDetailsLoadingState$.next(Models.LoadingState.Loading);
    setTimeout(() => {
      console.log('LOANS', LOANS);
      console.log('loanId', loanId);
      if (LOANS.find(loan => loan.id === loanId)) {
        this.loanDetailsLoadingState$.next(Models.LoadingState.Success);
        this.loanDetails$.next({
          id: loanId,
          type: Models.LoanType.Secured,
          verifications: [
            { type: Models.VerificationTypes.Identity, status: Models.VerificationStatus.ActionRequired },
            { type: Models.VerificationTypes.Income, status: Models.VerificationStatus.ActionRequired },
            { type: Models.VerificationTypes.Vehicle, status: Models.VerificationStatus.Verified },
          ],
        });
      } else {
        this.loanDetailsLoadingState$.next(Models.LoadingState.Error);
        this.loanDetailsErrorMessage$.next('Loan not found');
      }
    }, 1000);
  }
}
