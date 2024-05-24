import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HelpPanelComponent, MasterPageModule } from '../../../../components';
import { IrsVerifyActionComponent } from './components/irs-verify-action/irs-verify-action.component';
import { PlaidVerifyActionComponent } from './components/plaid-verify-action/plaid-verify-action.component';
import { IncomeComponent } from './income.component';
import { routing } from './income.routes';
import { RouteApiService } from './shared/store/api/route-api.service';

@NgModule({
  declarations: [IncomeComponent, PlaidVerifyActionComponent, IrsVerifyActionComponent],
  imports: [CommonModule, routing, MasterPageModule, HelpPanelComponent, CardModule, ProgressSpinnerModule],
  providers: [RouteApiService],
})
export class IncomeModule {}
