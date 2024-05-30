import { Models } from '$shared';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { RouteApiService as VehicleRouteApiService } from '../../shared/store/api/route-api.service';
import { RouteApiService as ManualVehicleRouteApiService } from './shared/store/api/route-api.service';

@Component({
  selector: 'app-vehicle-manual',
  templateUrl: './vehicle-manual.component.html',
  styleUrls: ['./vehicle-manual.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleManualComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  protected readonly LoadingState = Models.LoadingState;
  protected readonly IncomeVerificationMethod = Models.IncomeVerificationMethod;

  protected verificationMethod: Models.GenericVerificationMethod | null = null;

  protected fileUploader = signal(false);

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    protected vehicleRouteApi: VehicleRouteApiService,
    protected manualVehicleRouteApi: ManualVehicleRouteApiService,
  ) {}

  protected fileUploadBack = () => {
    this.fileUploader.set(false);
    this.verificationMethod = null;
  };

  navigateToVerification(method: Models.GenericVerificationMethod) {
    this.verificationMethod = method;
    this.fileUploader.set(true);
  }

  ngOnInit() {
    this.subscriptions.add(
      this.route.params.pipe(map(params => parseInt(params['loanId'], 10))).subscribe(loanId => {
        this.vehicleRouteApi.listVehicleVerificationMethods(loanId);
        this.manualVehicleRouteApi.listManualVehicleVerificationMethods(loanId);
      }),
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
