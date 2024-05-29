import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HelpPanelComponent, MasterPageModule } from '../../../../components';
import { LoadingSpinnerComponent } from '../../../../components/loading-spinner/loading-spinner.component';
import { IrsVerifyActionComponent } from './components/irs-verify-action/irs-verify-action.component';
import { PlaidVerifyActionComponent } from './components/plaid-verify-action/plaid-verify-action.component';
import { IncomeComponent } from './income.component';
import { routing } from './income.routes';
import { RouteApiService } from './shared/store/api/route-api.service';

@NgModule({
  declarations: [IncomeComponent],
  imports: [
    CommonModule,
    routing,
    MasterPageModule,
    HelpPanelComponent,
    CardModule,
    ProgressSpinnerModule,
    PlaidVerifyActionComponent,
    IrsVerifyActionComponent,
    LoadingSpinnerComponent,
  ],
  providers: [RouteApiService],
})
export class IncomeModule {}
