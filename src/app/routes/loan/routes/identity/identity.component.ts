import { Models } from '$shared';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, concatMap, filter, map } from 'rxjs';
import { RouteApiService } from './shared/store/api/route-api.service';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  protected readonly LoadingState = Models.LoadingState;
  protected readonly IdentityVerificationMethod = Models.IdentityVerificationMethod;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected routeApi: RouteApiService,
  ) {}

  ngOnInit() {
    // TODO: Check here OTP screen is needed
    this.subscriptions.add(
      this.route.params.pipe(map(params => parseInt(params['loanId'], 10))).subscribe(loanId => this.routeApi.listIdentityVerificationMethods(loanId)),
    );

    this.subscriptions.add(
      this.routeApi.identityVerificationMethodsLoadingState$
        .pipe(
          filter(state => [Models.LoadingState.Success, Models.LoadingState.Error].includes(state)),

          concatMap(() => this.routeApi.identityVerificationMethods$),
          filter(methods => !methods.length),
        )
        .subscribe(() => this.router.navigate(['manual'], { relativeTo: this.route })),
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
