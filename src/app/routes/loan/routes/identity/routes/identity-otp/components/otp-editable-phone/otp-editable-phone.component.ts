import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouteApiService } from 'src/app/routes/loan/shared/store/api/route-api.service';
import { RouteUiService } from '../../shared/store/ui/route-ui.service';

@Component({
  selector: 'app-otp-editable-phone',
  templateUrl: './otp-editable-phone.component.html',
  styleUrls: ['./otp-editable-phone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtpEditablePhoneComponent {
  constructor(
    protected loanApiService: RouteApiService,
    protected routeUiService: RouteUiService,
  ) {}

  editPhoneNumber() {
    this.routeUiService.editPhoneNumber();
  }

  cancelEditPhoneNumber() {
    this.routeUiService.cancelEditPhoneNumber();
  }
}
