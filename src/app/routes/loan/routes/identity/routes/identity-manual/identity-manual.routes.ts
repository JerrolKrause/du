import { titleAppendSlug } from '$shared';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentityManualComponent } from './identity-manual.component';
import { IdentityManualModule } from './identity-manual.module';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: IdentityManualComponent,
    title: titleAppendSlug('Verify Identity: Manual'),
  },
];

export const routing: ModuleWithProviders<IdentityManualModule> = RouterModule.forChild(routes);
