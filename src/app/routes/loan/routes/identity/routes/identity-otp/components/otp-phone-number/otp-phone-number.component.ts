import { Models } from '$shared';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteUiService } from 'src/app/routes/loan/routes/identity/routes/identity-otp/shared/store/ui/route-ui.service';
import { RouteApiService } from 'src/app/routes/loan/shared/store/api/route-api.service';

@Component({
  selector: 'app-otp-phone-number',
  templateUrl: './otp-phone-number.component.html',
  styleUrls: ['./otp-phone-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtpPhoneNumberComponent implements OnInit {
  protected readonly LoadingState = Models.LoadingState;
  protected readonly OtpMethod = Models.OtpMethod;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected loanApiService: RouteApiService,
    protected routeUiService: RouteUiService,
  ) {}

  ngOnInit() {
    this.loanApiService.getPhoneNumber();
  }

  // TODO: Remove this
  verifyOtp() {
    this.loanApiService.verifyOtp();
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
