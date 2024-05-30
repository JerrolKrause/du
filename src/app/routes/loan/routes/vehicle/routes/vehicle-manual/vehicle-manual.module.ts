import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HelpPanelComponent, IconsComponent, MasterPageModule } from '../../../../../../components';
import { FileUploadModule } from '../../../../../../components/file-upload/file-upload.module';
import { LoadingSpinnerComponent } from '../../../../../../components/loading-spinner/loading-spinner.component';
import { SecureMessageComponent } from '../../../../../../components/secure-message/secure-message.component';
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
    ProgressSpinnerModule,
    SecureMessageComponent,
    LoadingSpinnerComponent,
    FileUploadModule,
    IconsComponent,
  ],
  providers: [RouteApiService],
})
export class VehicleManualModule {}
