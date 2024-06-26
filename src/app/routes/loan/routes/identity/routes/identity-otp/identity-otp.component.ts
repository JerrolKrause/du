import { Models } from '$shared';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouteUiService } from 'src/app/routes/loan/routes/identity/routes/identity-otp/shared/store/ui/route-ui.service';

@Component({
  selector: 'app-identity-otp',
  templateUrl: './identity-otp.component.html',
  styleUrls: ['./identity-otp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityOtpComponent {
  protected readonly OtpMethod = Models.OtpMethod;

  constructor(protected routeUiService: RouteUiService) {}
}
