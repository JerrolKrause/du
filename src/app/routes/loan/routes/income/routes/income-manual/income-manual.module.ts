import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HelpPanelComponent, MasterPageModule } from '../../../../../../components';
import { IrsVerifyActionComponent } from '../../components/irs-verify-action/irs-verify-action.component';
import { PlaidVerifyActionComponent } from '../../components/plaid-verify-action/plaid-verify-action.component';
import { IncomeManualComponent } from './income-manual.component';
import { routing } from './income-manual.routes';

@NgModule({
  declarations: [IncomeManualComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    MasterPageModule,
    HelpPanelComponent,
    ButtonModule,
    CardModule,
    DropdownModule,
    ProgressSpinnerModule,
    PlaidVerifyActionComponent,
    IrsVerifyActionComponent,
  ],
})
export class IncomeManualModule {}
