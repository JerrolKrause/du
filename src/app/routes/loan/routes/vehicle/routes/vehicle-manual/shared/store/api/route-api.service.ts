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
  manualVehicleVerificationMethodsLoadingState$ = new BehaviorSubject<Models.LoadingState>(Models.LoadingState.Unloaded);
  manualVehicleVerificationMethods$ = new BehaviorSubject<Models.GenericVerificationMethod[] | undefined>(undefined);
  manualVehicleVerificationMethodsErrorMessage$ = new BehaviorSubject<string>('');

  listManualVehicleVerificationMethods(loanId: number) {
    this.manualVehicleVerificationMethodsLoadingState$.next(Models.LoadingState.Loading);
    this.manualVehicleVerificationMethods$.next([]);
    this.manualVehicleVerificationMethodsErrorMessage$.next('');

    setTimeout(() => {
      const loan = LOANS.find(loan => loan.id === loanId);
      if (loan) {
        this.manualVehicleVerificationMethods$.next([
          { id: 0, stub: 'registration', label: 'Vehicle Registration' },
          { id: 1, stub: 'insurance', label: 'Insurance Card' },
          { id: 2, stub: 'vin', label: 'Photo of VIN' },
          { id: 3, stub: 'odometer', label: 'Photo of Odometer' },
          { id: 3, stub: 'vehicle', label: '2 Photos of Vehicle' },
          { id: 3, stub: 'ownership', label: 'Proof of Ownership' },
        ]);
        this.manualVehicleVerificationMethodsLoadingState$.next(Models.LoadingState.Success);
      } else {
        this.manualVehicleVerificationMethodsErrorMessage$.next('Loan not found');
        this.manualVehicleVerificationMethodsLoadingState$.next(Models.LoadingState.Error);
      }
    }, 750);
  }
}
