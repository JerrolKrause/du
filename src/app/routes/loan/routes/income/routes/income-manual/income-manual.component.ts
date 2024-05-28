import { Models } from '$shared';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { RouteApiService } from '../../shared/store/api/route-api.service';

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

  protected options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
  ];

  protected form = this.fb.group({
    dropdown: [this.options[0].value, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    protected routeApi: RouteApiService,
  ) {}

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted with value:', this.form.value.dropdown);
      // Here you can handle form submission logic
    }
  }

  ngOnInit() {
    this.subscriptions.add(
      this.route.params.pipe(map(params => parseInt(params['loanId'], 10))).subscribe(loanId => this.routeApi.listIncomeVerificationMethods(loanId)),
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
