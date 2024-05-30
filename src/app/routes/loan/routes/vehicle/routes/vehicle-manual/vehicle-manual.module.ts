import { FileUploadModule, HelpPanelComponent, IconsComponent, LoadingSpinnerComponent, MasterPageModule, SecureMessageComponent } from '$components';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { RouteApiService } from './shared/store/api/route-api.service';
import { VehicleManualComponent } from './vehicle-manual.component';
import { routing } from './vehicle-manual.routes';

@NgModule({
  declarations: [VehicleManualComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    MasterPageModule,
    HelpPanelComponent,
    ButtonModule,
    CardModule,
    DropdownModule,
    SecureMessageComponent,
    LoadingSpinnerComponent,
    FileUploadModule,
    IconsComponent,
  ],
  providers: [RouteApiService],
})
export class VehicleManualModule {}
