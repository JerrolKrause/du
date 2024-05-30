import { HelpPanelComponent, LoadingSpinnerComponent, MasterPageModule } from '$components';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { IrsVerifyActionComponent, PlaidVerifyActionComponent } from './components';
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
    PlaidVerifyActionComponent,
    IrsVerifyActionComponent,
    LoadingSpinnerComponent,
  ],
  providers: [RouteApiService],
})
export class IncomeModule {}
