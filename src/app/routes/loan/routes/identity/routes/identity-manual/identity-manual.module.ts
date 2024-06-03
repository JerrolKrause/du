import { FileUploadModule, HelpPanelComponent, LoadingSpinnerComponent, MasterPageModule, SecureMessageComponent } from '$components';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { VeriffVerifyActionComponent } from '../../components';
import { IdentityManualComponent } from './identity-manual.component';
import { routing } from './identity-manual.routes';
import { RouteApiService } from './shared/store/api/route-api.service';

@NgModule({
  declarations: [IdentityManualComponent],
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
    VeriffVerifyActionComponent,
    SecureMessageComponent,
    LoadingSpinnerComponent,
    FileUploadModule,
  ],
  providers: [RouteApiService],
})
export class IdentityManualModule {}
