import { titleAppendSlug } from '$shared';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanComponent } from './loan.component';
import { LoanModule } from './loan.module';

const routes: Routes = [
  {
    path: ':loanId/vehicle',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./routes/vehicle/vehicle.module').then(m => m.VehicleModule),
  },
  {
    path: ':loanId/income',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./routes/income/income.module').then(m => m.IncomeModule),
  },
  {
    path: ':loanId/identity',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./routes/identity/identity.module').then(m => m.IdentityModule),
  },
  {
    path: ':loanId',
    component: LoanComponent,
    title: titleAppendSlug('Loan'),
    // canActivate: [AuthGuard]
  },
  {
    path: '**',
    loadChildren: () => import('../no-content/no-content.module').then(m => m.NoContentModule),
    title: titleAppendSlug('Page Not Found'),
  },
];

export const routing: ModuleWithProviders<LoanModule> = RouterModule.forChild(routes);
