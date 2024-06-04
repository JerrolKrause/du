import { Models } from '$shared';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteApiService } from 'src/app/routes/loan/shared/store/api/route-api.service';

@Component({
  selector: 'app-identity-otp',
  templateUrl: './identity-otp.component.html',
  styleUrls: ['./identity-otp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityOtpComponent implements OnInit {
  protected readonly LoadingState = Models.LoadingState;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected loanApiService: RouteApiService,
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
