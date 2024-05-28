import { Models } from '$shared';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor(
    private route: ActivatedRoute,
    protected routeApi: RouteApiService,
  ) {}

  ngOnInit() {
    this.subscriptions.add(
      this.route.params.pipe(map(params => parseInt(params['loanId'], 10))).subscribe(loanId => this.routeApi.listIncomeVerificationMethods(loanId)),
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
