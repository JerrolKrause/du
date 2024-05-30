import { titleAppendSlug } from '$shared';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleComponent } from './vehicle.component';
import { VehicleModule } from './vehicle.module';

const routes: Routes = [
  {
    path: 'manual',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./routes/vehicle-manual/vehicle-manual.module').then(m => m.VehicleManualModule),
  },
  {
    path: '',
    component: VehicleComponent,
    // canActivate: [AuthGuard],
    title: titleAppendSlug('Verify Vehicle'),
  },
];

export const routing: ModuleWithProviders<VehicleModule> = RouterModule.forChild(routes);
