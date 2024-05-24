import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HelpPanelComponent, MasterPageModule } from '../../../../components';
import { IncomeComponent } from './income.component';
import { routing } from './income.routes';

@NgModule({
  declarations: [IncomeComponent],
  imports: [CommonModule, routing, MasterPageModule, HelpPanelComponent],
})
export class IncomeModule {}
