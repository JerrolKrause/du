import { Models } from '$shared';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, concatMap, filter, map } from 'rxjs';
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
  protected readonly IncomeVerificationMethod = Models.IncomeVerificationMethod;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected routeApi: RouteApiService,
  ) {}

  ngOnInit() {
    this.subscriptions.add(
      this.route.params.pipe(map(params => parseInt(params['loanId'], 10))).subscribe(loanId => this.routeApi.listIncomeVerificationMethods(loanId)),
    );

    this.subscriptions.add(
      this.routeApi.incomeVerificationMethodsLoadingState$
        .pipe(
          filter(state => [Models.LoadingState.Success, Models.LoadingState.Error].includes(state)),

          concatMap(() => this.routeApi.incomeVerificationMethods$),
          filter(methods => !methods.length),
        )
        .subscribe(() => this.router.navigate(['manual'], { relativeTo: this.route })),
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
