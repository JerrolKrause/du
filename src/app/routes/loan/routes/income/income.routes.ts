import { titleAppendSlug } from '$shared';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeComponent } from './income.component';
import { IncomeModule } from './income.module';

const routes: Routes = [
  {
    path: 'manual',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./routes/income-manual/income-manual.module').then(m => m.IncomeManualModule),
  },
  {
    path: '',
    component: IncomeComponent,
    // canActivate: [AuthGuard],
    title: titleAppendSlug('Verify Income'),
  },
];

export const routing: ModuleWithProviders<IncomeModule> = RouterModule.forChild(routes);
