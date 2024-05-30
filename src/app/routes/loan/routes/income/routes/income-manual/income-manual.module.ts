import { FileUploadModule, HelpPanelComponent, LoadingSpinnerComponent, MasterPageModule, SecureMessageComponent } from '$components';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { IrsVerifyActionComponent, PlaidVerifyActionComponent } from '../../components';
import { IncomeManualComponent } from './income-manual.component';
import { routing } from './income-manual.routes';
import { RouteApiService } from './shared/store/api/route-api.service';

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
    PlaidVerifyActionComponent,
    IrsVerifyActionComponent,
    SecureMessageComponent,
    LoadingSpinnerComponent,
    FileUploadModule,
  ],
  providers: [RouteApiService],
})
export class IncomeManualModule {}
