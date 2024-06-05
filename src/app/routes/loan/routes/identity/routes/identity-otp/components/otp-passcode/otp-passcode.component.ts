import { Models } from '$shared';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription, filter, pairwise, take } from 'rxjs';
import { RouteUiService } from 'src/app/routes/loan/routes/identity/routes/identity-otp/shared/store/ui/route-ui.service';
import { RouteApiService } from 'src/app/routes/loan/shared/store/api/route-api.service';

@Component({
  selector: 'app-otp-passcode',
  templateUrl: './otp-passcode.component.html',
  styleUrls: ['./otp-passcode.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtpPasscodeComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  protected readonly LoadingState = Models.LoadingState;
  protected readonly OtpMethod = Models.OtpMethod;

  protected form = new FormGroup({
    passcode: new FormControl<string>('', { validators: [Validators.required, Validators.minLength(6), Validators.maxLength(6)] }),
  });

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    protected loanApiService: RouteApiService,
    protected routeUiService: RouteUiService,
  ) {}

  ngOnInit() {
    this.loanApiService.getPhoneNumber();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  resendPasscode() {
    this.subscriptions.add(
      this.loanApiService.resendOtpState$
        .pipe(
          pairwise(),
          filter(([prev, current]) => prev === Models.LoadingState.Loading && current === Models.LoadingState.Success),
          take(1),
        )
        .subscribe(() => this.messageService.add({ severity: 'success', detail: 'Passcode resent' })),
    );
    this.loanApiService.resendOtp();
  }

  // TODO: Remove this
  verifyOtp() {
    this.loanApiService.verifyOtp();
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
