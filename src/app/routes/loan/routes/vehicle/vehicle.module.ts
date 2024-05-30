import { HelpPanelComponent, LoadingSpinnerComponent, MasterPageModule } from '$components';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { DocumentsChecklistComponent } from './components';
import { RouteApiService } from './shared/store/api/route-api.service';
import { VehicleComponent } from './vehicle.component';
import { routing } from './vehicle.routes';

@NgModule({
  declarations: [VehicleComponent, DocumentsChecklistComponent],
  imports: [CommonModule, routing, MasterPageModule, HelpPanelComponent, ButtonModule, CardModule, TooltipModule, LoadingSpinnerComponent],
  providers: [RouteApiService],
})
export class VehicleModule {}
