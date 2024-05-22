import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoanComponent } from '../loan/loan.component';
// Routing
import { SharedModule } from '$shared';
import { HelpPanelComponent, MasterPageModule } from '../../components';
import { routing } from './loan.routes';

@NgModule({
  declarations: [LoanComponent],
  imports: [CommonModule, SharedModule, routing, MasterPageModule, HelpPanelComponent],
})
export class LoanModule {}
