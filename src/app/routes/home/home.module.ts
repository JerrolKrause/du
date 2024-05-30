import { HelpPanelComponent, IconsComponent, MasterPageModule } from '$components';
import { SharedModule } from '$shared';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Routing
import { routing } from './home.routes';

// Components
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { LoanThumbComponent } from './components';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, SharedModule, routing, MasterPageModule, IconsComponent, CardModule, ButtonModule, HelpPanelComponent],
  declarations: [HomeComponent, LoanThumbComponent],
  providers: [],
  exports: [],
})
export class HomeModule {}
