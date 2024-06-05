import { IconsComponent, LoadingSpinnerComponent, MasterPageModule } from '$components';
import { SharedModule } from '$shared';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputOtpModule } from 'primeng/inputotp';
import { ToastModule } from 'primeng/toast';
import { OtpEditablePhoneComponent } from 'src/app/routes/loan/routes/identity/routes/identity-otp/components/otp-editable-phone/otp-editable-phone.component';
import { OtpPasscodeComponent } from './components/otp-passcode/otp-passcode.component';
import { OtpPhoneNumberComponent } from './components/otp-phone-number/otp-phone-number.component';
import { OtpQuestionsComponent } from './components/otp-questions/otp-questions.component';
import { IdentityOtpComponent } from './identity-otp.component';
import { routing } from './identity-otp.routes';
import { RouteUiService } from './shared/store/ui/route-ui.service';

@NgModule({
  declarations: [IdentityOtpComponent, OtpPhoneNumberComponent, OtpPasscodeComponent, OtpQuestionsComponent, OtpEditablePhoneComponent],
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MasterPageModule,
    ButtonModule,
    CardModule,
    InputOtpModule,
    ToastModule,
    LoadingSpinnerComponent,
    IconsComponent,
  ],
  providers: [RouteUiService, MessageService],
})
export class IdentityOtpModule {}
