import { titleAppendSlug } from '$shared';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanComponent } from './loan.component';
import { LoanModule } from './loan.module';

const routes: Routes = [
  {
    path: ':loandId',
    component: LoanComponent,
    title: titleAppendSlug('Loan'),
  },
  {
    path: '**',
    loadChildren: () => import('../no-content/no-content.module').then(m => m.NoContentModule),
    title: titleAppendSlug('Page Not Found'),
  },
];

export const routing: ModuleWithProviders<LoanModule> = RouterModule.forChild(routes);
