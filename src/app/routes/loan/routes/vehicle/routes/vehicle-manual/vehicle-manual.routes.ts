import { titleAppendSlug } from '$shared';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleManualComponent } from './vehicle-manual.component';
import { VehicleManualModule } from './vehicle-manual.module';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: VehicleManualComponent,
    title: titleAppendSlug('Verify Income: Manual'),
  },
];

export const routing: ModuleWithProviders<VehicleManualModule> = RouterModule.forChild(routes);
