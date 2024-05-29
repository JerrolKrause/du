import { titleAppendSlug } from '$shared';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeManualComponent } from './income-manual.component';
import { IncomeManualModule } from './income-manual.module';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: IncomeManualComponent,
    title: titleAppendSlug('Verify Income: Manual'),
  },
];

export const routing: ModuleWithProviders<IncomeManualModule> = RouterModule.forChild(routes);
