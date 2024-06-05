import { titleAppendSlug } from '$shared';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentityComponent } from './identity.component';
import { IdentityModule } from './identity.module';

const routes: Routes = [
  {
    path: 'manual',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./routes/identity-manual/identity-manual.module').then(m => m.IdentityManualModule),
  },
  {
    path: 'otp',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./routes/identity-otp/identity-otp.module').then(m => m.IdentityOtpModule),
  },
  {
    path: '',
    component: IdentityComponent,
    // canActivate: [AuthGuard],
    title: titleAppendSlug('Verify Identity'),
  },
];

export const routing: ModuleWithProviders<IdentityModule> = RouterModule.forChild(routes);
