import { IconsComponent, MasterPageModule } from '$components';
import { SharedModule } from '$shared';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Routing
import { routing } from './home.routes';

// Components
import { CardModule } from 'primeng/card';
import { HelpPanelComponent } from './components/help-panel/help-panel.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, SharedModule, routing, MasterPageModule, IconsComponent, CardModule],
  declarations: [HomeComponent, HelpPanelComponent],
  providers: [],
  exports: [],
})
export class HomeModule {}
