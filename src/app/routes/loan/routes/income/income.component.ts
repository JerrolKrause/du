import { Models } from '$shared';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { RouteApiService } from './shared/store/api/route-api.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomeComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  protected readonly LoadingState = Models.LoadingState;

  constructor(
    private route: ActivatedRoute,
    protected routeApi: RouteApiService,
  ) {}

  ngOnInit() {
    this.subscriptions.add(
      this.route.params.pipe(map(params => parseInt(params['loanId'], 10))).subscribe(loanId => this.routeApi.listIncomeVerificationMethods(loanId)),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
