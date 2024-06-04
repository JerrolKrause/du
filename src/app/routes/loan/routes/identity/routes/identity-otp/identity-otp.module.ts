import { LoadingSpinnerComponent, MasterPageModule } from '$components';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { IdentityOtpComponent } from './identity-otp.component';
import { routing } from './identity-otp.routes';

@NgModule({
  declarations: [IdentityOtpComponent],
  imports: [CommonModule, routing, MasterPageModule, CardModule, LoadingSpinnerComponent],
})
export class IdentityOtpModule {}
