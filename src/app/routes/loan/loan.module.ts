import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoanComponent } from '../loan/loan.component';
// Routing
import { SharedModule } from '$shared';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HelpPanelComponent, MasterPageModule } from '../../components';
import { routing } from './loan.routes';
import { RouteApiService } from './shared/store/api/route-api.service';

@NgModule({
  declarations: [LoanComponent],
  imports: [CommonModule, SharedModule, routing, MasterPageModule, HelpPanelComponent, CardModule, ProgressSpinnerModule],
  providers: [RouteApiService],
})
export class LoanModule {}
