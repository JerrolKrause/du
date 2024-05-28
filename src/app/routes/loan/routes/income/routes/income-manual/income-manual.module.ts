import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HelpPanelComponent, MasterPageModule } from '../../../../../../components';
import { IncomeManualComponent } from './income-manual.component';
import { routing } from './income-manual.routes';

@NgModule({
  declarations: [IncomeManualComponent],
  imports: [CommonModule, routing, MasterPageModule, HelpPanelComponent],
})
export class IncomeManualModule {}
