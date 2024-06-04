import { Models } from '$shared';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouteApiService } from 'src/app/routes/loan/shared/store/api/route-api.service';

@Component({
  selector: 'app-identity-otp',
  templateUrl: './identity-otp.component.html',
  styleUrls: ['./identity-otp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityOtpComponent implements OnInit {
  protected readonly LoadingState = Models.LoadingState;

  constructor(protected routeApi: RouteApiService) {}

  ngOnInit() {
    this.routeApi.getPhoneNumber();
  }
}
