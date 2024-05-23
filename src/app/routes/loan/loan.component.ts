import { ApiService, Models } from '$shared';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { RouteApiService } from './shared/store/api/route-api.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  private readonly NEW_VERIFICATIONS = [Models.VerificationStatus.New, Models.VerificationStatus.ActionRequired];
  protected readonly LoadingState = Models.LoadingState;

  protected userName$ = this.globalAPIStore.loggedInUser$.pipe(map(user => user.name));
  protected tasksToComplete$ = this.routeApi.loanDetails$.pipe(
    map(loan => loan?.verifications.filter(verification => this.NEW_VERIFICATIONS.includes(verification.status)).length || 0),
  );

  protected newVerifications$ = this.routeApi.loanDetails$.pipe(
    map(loan => loan?.verifications.filter(verification => this.NEW_VERIFICATIONS.includes(verification.status)) || []),
  );
  protected hasNewVerifications$ = this.newVerifications$.pipe(map(verifications => verifications.length > 0));

  protected completedVerifications$ = this.routeApi.loanDetails$.pipe(
    map(loan => loan?.verifications.filter(verification => !this.NEW_VERIFICATIONS.includes(verification.status)) || []),
  );
  protected hasCompletedVerifications$ = this.completedVerifications$.pipe(map(verifications => verifications.length > 0));

  constructor(
    private route: ActivatedRoute,
    private globalAPIStore: ApiService,
    protected routeApi: RouteApiService,
  ) {}

  ngOnInit() {
    this.subscriptions.add(this.route.params.pipe(map(params => parseInt(params['loanId'], 10))).subscribe(loanId => this.routeApi.getLoanDetails(loanId)));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
