import { Models } from '$shared';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteUiService } from 'src/app/routes/loan/routes/identity/routes/identity-otp/shared/store/ui/route-ui.service';
import { RouteApiService } from 'src/app/routes/loan/shared/store/api/route-api.service';

@Component({
  selector: 'app-otp-questions',
  templateUrl: './otp-questions.component.html',
  styleUrls: ['./otp-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtpQuestionsComponent {
  protected readonly OtpMethod = Models.OtpMethod;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected loanApiService: RouteApiService,
    protected routeUiService: RouteUiService,
  ) {}

  // TODO: Remove this
  verifyOtp() {
    this.loanApiService.verifyOtp();
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
