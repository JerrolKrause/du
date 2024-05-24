import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { titleAppendSlug } from '../../shared';
import { LoginComponent } from './login.component';
import { LoginModule } from './login.module';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: titleAppendSlug('Login'),
  },
];

export const routing: ModuleWithProviders<LoginModule> = RouterModule.forChild(routes);
