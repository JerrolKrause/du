import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule as PrimeFileUploadModule } from 'primeng/fileupload';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SecureMessageComponent } from '../secure-message/secure-message.component';
import { PhotoGuidelinesComponent } from './components';
import { FileUploadComponent } from './file-upload.component';

@NgModule({
  declarations: [FileUploadComponent, PhotoGuidelinesComponent],
  imports: [CommonModule, CardModule, SecureMessageComponent, FieldsetModule, PrimeFileUploadModule, SplitButtonModule],
  exports: [FileUploadComponent],
})
export class FileUploadModule {}
