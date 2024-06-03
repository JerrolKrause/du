import { HelpPanelComponent, LoadingSpinnerComponent, MasterPageModule } from '$components';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { VeriffVerifyActionComponent } from './components';
import { IdentityComponent } from './identity.component';
import { routing } from './identity.routes';
import { RouteApiService } from './shared/store/api/route-api.service';

@NgModule({
  declarations: [IdentityComponent],
  imports: [CommonModule, routing, MasterPageModule, HelpPanelComponent, CardModule, VeriffVerifyActionComponent, LoadingSpinnerComponent],
  providers: [RouteApiService],
})
export class IdentityModule {}
