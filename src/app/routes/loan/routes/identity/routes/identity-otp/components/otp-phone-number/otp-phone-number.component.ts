import { Models } from '$shared';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouteApiService } from 'src/app/routes/loan/shared/store/api/route-api.service';
import { RouteUiService } from '../..//shared/store/ui/route-ui.service';

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
    protected loanApiService: RouteApiService,
    protected routeUiService: RouteUiService,
  ) {}

  ngOnInit() {
    this.loanApiService.getPhoneNumber();
  }

  sendPasscode() {
    this.loanApiService.sendOtp();
  }
}
