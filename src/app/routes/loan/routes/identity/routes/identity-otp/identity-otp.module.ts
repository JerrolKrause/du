import { IconsComponent, LoadingSpinnerComponent, MasterPageModule } from '$components';
import { SharedModule } from '$shared';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { OtpEditablePhoneComponent } from 'src/app/routes/loan/routes/identity/routes/identity-otp/components/otp-editable-phone/otp-editable-phone.component';
import { OtpPasscodeComponent } from './components/otp-passcode/otp-passcode.component';
import { OtpPhoneNumberComponent } from './components/otp-phone-number/otp-phone-number.component';
import { OtpQuestionsComponent } from './components/otp-questions/otp-questions.component';
import { IdentityOtpComponent } from './identity-otp.component';
import { routing } from './identity-otp.routes';
import { RouteUiService } from './shared/store/ui/route-ui.service';

@NgModule({
  declarations: [IdentityOtpComponent, OtpPhoneNumberComponent, OtpPasscodeComponent, OtpQuestionsComponent, OtpEditablePhoneComponent],
  imports: [CommonModule, routing, SharedModule, MasterPageModule, ButtonModule, CardModule, LoadingSpinnerComponent, IconsComponent],
  providers: [RouteUiService],
})
export class IdentityOtpModule {}
