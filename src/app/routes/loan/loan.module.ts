import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoanComponent } from '../loan/loan.component';
// Routing
import { SharedModule } from '$shared';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HelpPanelComponent, IconsComponent, MasterPageModule } from '../../components';
import { LoanBackNavComponent } from './components/loan-back-nav/loan-back-nav.component';
import { VerificationTaskComponent } from './components/verification-task/verification-task.component';
import { routing } from './loan.routes';
import { VerificationTypePipe } from './pipes/verification-type.pipe';
import { RouteApiService } from './shared/store/api/route-api.service';

@NgModule({
  declarations: [LoanComponent, LoanBackNavComponent, VerificationTaskComponent, VerificationTypePipe],
  imports: [CommonModule, SharedModule, routing, MasterPageModule, HelpPanelComponent, CardModule, ProgressSpinnerModule, IconsComponent],
  providers: [RouteApiService],
})
export class LoanModule {}
