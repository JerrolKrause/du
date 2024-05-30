import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TooltipModule } from 'primeng/tooltip';
import { HelpPanelComponent, MasterPageModule } from '../../../../components';
import { LoadingSpinnerComponent } from '../../../../components/loading-spinner/loading-spinner.component';
import { DocumentsChecklistComponent } from './components/documents-checklist/documents-checklist.component';
import { RouteApiService } from './shared/store/api/route-api.service';
import { VehicleComponent } from './vehicle.component';
import { routing } from './vehicle.routes';

@NgModule({
  declarations: [VehicleComponent, DocumentsChecklistComponent],
  imports: [
    CommonModule,
    routing,
    MasterPageModule,
    HelpPanelComponent,
    ButtonModule,
    CardModule,
    TooltipModule,
    ProgressSpinnerModule,
    LoadingSpinnerComponent,
  ],
  providers: [RouteApiService],
})
export class VehicleModule {}
