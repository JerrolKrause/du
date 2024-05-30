import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoanComponent } from '../loan/loan.component';
// Routing
import { HelpPanelComponent, IconsComponent, LoadingSpinnerComponent, MasterPageModule } from '$components';
import { SharedModule } from '$shared';
import { CardModule } from 'primeng/card';
import { LoanBackNavComponent, VerificationTaskComponent } from './components';
import { routing } from './loan.routes';
import { VerificationTypePipe } from './pipes/verification-type.pipe';
import { RouteApiService } from './shared/store/api/route-api.service';

@NgModule({
  declarations: [LoanComponent, LoanBackNavComponent, VerificationTaskComponent, VerificationTypePipe],
  imports: [CommonModule, SharedModule, routing, MasterPageModule, HelpPanelComponent, CardModule, IconsComponent, LoadingSpinnerComponent],
  providers: [RouteApiService],
})
export class LoanModule {}
