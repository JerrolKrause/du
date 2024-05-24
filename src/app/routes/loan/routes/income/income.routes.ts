import { titleAppendSlug } from '$shared';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeComponent } from './income.component';
import { IncomeModule } from './income.module';

const routes: Routes = [
  {
    path: '',
    component: IncomeComponent,
    title: titleAppendSlug('Verify Income'),
  },
];

export const routing: ModuleWithProviders<IncomeModule> = RouterModule.forChild(routes);
