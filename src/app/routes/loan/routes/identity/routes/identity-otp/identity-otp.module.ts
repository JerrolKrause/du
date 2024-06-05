import { LoadingSpinnerComponent, MasterPageModule } from '$components';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { OtpPhoneNumberComponent } from './components/otp-phone-number/otp-phone-number.component';
import { OtpQuestionsComponent } from './components/otp-questions/otp-questions.component';
import { IdentityOtpComponent } from './identity-otp.component';
import { routing } from './identity-otp.routes';
import { RouteUiService } from './shared/store/ui/route-ui.service';

@NgModule({
  declarations: [IdentityOtpComponent, OtpPhoneNumberComponent, OtpQuestionsComponent],
  imports: [CommonModule, routing, MasterPageModule, ButtonModule, CardModule, LoadingSpinnerComponent],
  providers: [RouteUiService],
})
export class IdentityOtpModule {}
