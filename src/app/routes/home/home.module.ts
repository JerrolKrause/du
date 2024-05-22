import { HelpPanelComponent, IconsComponent, MasterPageModule } from '$components';
import { SharedModule } from '$shared';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Routing
import { routing } from './home.routes';

// Components
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { LoanThumbComponent } from './components/loan-thumb/loan-thumb.component';
import { HomeComponent } from './home.component';
import { SafeLoanIdPipe } from './pipes/safe-loan-id.pipe';

@NgModule({
  imports: [CommonModule, SharedModule, routing, MasterPageModule, IconsComponent, CardModule, FontAwesomeModule, ButtonModule, HelpPanelComponent],
  declarations: [HomeComponent, LoanThumbComponent, SafeLoanIdPipe],
  providers: [],
  exports: [],
})
export class HomeModule {}
