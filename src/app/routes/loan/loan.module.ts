import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoanComponent } from '../loan/loan.component';
// Routing
import { routing } from './loan.routes';

@NgModule({
  declarations: [LoanComponent],
  imports: [CommonModule, routing],
})
export class LoanModule {}
