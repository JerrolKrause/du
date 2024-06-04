import { titleAppendSlug } from '$shared';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentityOtpComponent } from './identity-otp.component';
import { IdentityOtpModule } from './identity-otp.module';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: IdentityOtpComponent,
    title: titleAppendSlug('Verify Identity: OTP'),
  },
];

export const routing: ModuleWithProviders<IdentityOtpModule> = RouterModule.forChild(routes);
