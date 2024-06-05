import { Models } from '$shared';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, distinctUntilChanged, map } from 'rxjs';
import LOANS from '../../../../../../assets/mock-data/loans';
// import { environment } from '$env'; // Base api url

/**
 * Route specific api stores
 * By default they are not injected in root since they are only needed by this route
 */
@Injectable()
export class RouteApiService {
  private otpVerified$ = new BehaviorSubject<boolean | undefined>(undefined);
  private loanDetailsCache: Record<number, Models.LoanDetails> = {};

  loanDetailsLoadingState$ = new BehaviorSubject<Models.LoadingState>(Models.LoadingState.Unloaded);
  loanDetails$ = new BehaviorSubject<Models.LoanDetails | null>(null);
  loanDetailsErrorMessage$ = new BehaviorSubject<string>('');

  updatingVerificationState$ = new BehaviorSubject<Models.LoadingState>(Models.LoadingState.Unloaded);
  updatingVerificationErrorMessage$ = new BehaviorSubject<string>('');

  phoneNumberLoadingState$ = new BehaviorSubject<Models.LoadingState>(Models.LoadingState.Unloaded);
  phoneNumber$ = new BehaviorSubject<string | undefined>(undefined);
  phoneNumberErrorMessage$ = new BehaviorSubject<string>('');

  sendOtpState$ = new BehaviorSubject<Models.LoadingState>(Models.LoadingState.Unloaded);
  sendOtpErrorMessage$ = new BehaviorSubject<string>('');

  requiresOtp$ = this.otpVerified$.asObservable().pipe(
    map(otpVerified => (undefined === otpVerified ? undefined : !otpVerified)),
    distinctUntilChanged(),
  );

  constructor(private router: Router) {
    LOANS.forEach(loan => {
      this.loanDetailsCache[loan.id] = {
        id: loan.id,
        type: loan.type,
        status: loan.status,
        verifications: [
          { type: Models.VerificationTypes.Identity, status: Models.VerificationStatus.New },
          { type: Models.VerificationTypes.Income, status: Models.VerificationStatus.New },
          { type: Models.VerificationTypes.Vehicle, status: Models.VerificationStatus.New },
        ],
      };
    });
  }

  getLoanDetails(loanId: number) {
    this.loanDetailsLoadingState$.next(Models.LoadingState.Loading);
    this.loanDetails$.next(null);
    this.loanDetailsErrorMessage$.next('');

    setTimeout(() => {
      const loanDetails = this.loanDetailsCache[loanId];
      if (loanDetails) {
        this.loanDetails$.next(loanDetails);
        this.loanDetailsLoadingState$.next(Models.LoadingState.Success);
      } else {
        this.loanDetailsErrorMessage$.next('Loan not found');
        this.loanDetailsLoadingState$.next(Models.LoadingState.Error);
      }
    }, 500);
  }

  verify(loanId: number, type: Models.VerificationTypes, status: Models.VerificationStatus) {
    this.updatingVerificationState$.next(Models.LoadingState.Loading);
    const loanDetails = this.loanDetailsCache[loanId];

    if (loanDetails) {
      loanDetails.verifications = loanDetails.verifications.map(v => (v.type === type ? { ...v, status } : v));
      if (this.loanDetails$.value?.id === loanId) {
        this.loanDetails$.next(loanDetails);
      }
      this.updatingVerificationState$.next(Models.LoadingState.Success);
      this.router.navigate(['/loan', loanId]);
    } else {
      this.updatingVerificationErrorMessage$.next('Loan not found');
    }
  }

  checkOtpRequired() {
    // Make a real server call to decide if OTP is required.
    if (this.otpVerified$.value === undefined) {
      this.otpVerified$.next(false);
    }
  }

  getPhoneNumber() {
    this.phoneNumberLoadingState$.next(Models.LoadingState.Loading);
    this.phoneNumber$.next(undefined);
    this.phoneNumberErrorMessage$.next('');

    setTimeout(() => {
      this.phoneNumber$.next('1234567890');
      this.phoneNumberLoadingState$.next(Models.LoadingState.Success);
    }, 750);
  }

  updatePhoneNumber(phoneNumber: string) {
    this.phoneNumberLoadingState$.next(Models.LoadingState.Loading);
    this.phoneNumberErrorMessage$.next('');

    setTimeout(() => {
      this.phoneNumber$.next(phoneNumber);
      this.phoneNumberLoadingState$.next(Models.LoadingState.Success);
    }, 750);
  }

  sendOtp() {
    this.sendOtpState$.next(Models.LoadingState.Loading);
    this.sendOtpErrorMessage$.next('');

    setTimeout(() => {
      this.sendOtpState$.next(Models.LoadingState.Success);
    }, 750);
  }

  resendOtp() {
    this.sendOtp();
  }

  verifyOtp() {
    this.otpVerified$.next(true);
  }
}
