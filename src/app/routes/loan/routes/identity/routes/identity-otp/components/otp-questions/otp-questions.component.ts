import { Models } from '$shared';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouteUiService } from 'src/app/routes/loan/routes/identity/routes/identity-otp/shared/store/ui/route-ui.service';

@Component({
  selector: 'app-otp-questions',
  templateUrl: './otp-questions.component.html',
  styleUrls: ['./otp-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtpQuestionsComponent {
  protected readonly OtpMethod = Models.OtpMethod;

  constructor(protected routeUiService: RouteUiService) {}
}
