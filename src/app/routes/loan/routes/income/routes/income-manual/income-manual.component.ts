import { Models } from '$shared';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';
import { RouteApiService as IncomeRouteApiService } from '../../shared/store/api/route-api.service';
import { RouteApiService as ManualIncomeRouteApiService } from './shared/store/api/route-api.service';

@Component({
  selector: 'app-income-manual',
  templateUrl: './income-manual.component.html',
  styleUrls: ['./income-manual.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomeManualComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  protected readonly LoadingState = Models.LoadingState;
  protected readonly IncomeVerificationMethod = Models.IncomeVerificationMethod;
  protected readonly VerificationTypes = Models.VerificationTypes;

  protected form = this.fb.group({
    dropdown: new FormControl<Models.GenericVerificationOption | undefined>(undefined, Validators.required),
  });

  protected fileUploader = signal(false);
  protected loanId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    protected incomeRouteApi: IncomeRouteApiService,
    protected manualIncomeRouteApi: ManualIncomeRouteApiService,
  ) {}

  protected fileUploadBack = () => {
    this.fileUploader.set(false);
  };

  onSubmit() {
    if (this.form.valid) {
      this.fileUploader.set(true);
    }
  }

  ngOnInit() {
    this.subscriptions.add(
      this.route.params.pipe(map(params => parseInt(params['loanId'], 10))).subscribe(loanId => {
        this.loanId = loanId;
        this.incomeRouteApi.listIncomeVerificationMethods(loanId);
        this.manualIncomeRouteApi.listManualIncomeVerificationMethods(loanId);
      }),
    );

    this.subscriptions.add(
      this.manualIncomeRouteApi.manualIncomeVerificationMethods$
        .pipe(
          filter(options => !!options && !!options.length),
          map(options => (options as Models.GenericVerificationOption[])[0]),
        )
        .subscribe(option => this.form.controls['dropdown'].setValue(option)),
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
