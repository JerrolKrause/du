import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FileUploadModule as PrimeFileUploadModule } from 'primeng/fileupload';
import { SecureMessageComponent } from '../secure-message/secure-message.component';
import { PhotoGuidelinesComponent } from './components/photo-guidelines/photo-guidelines.component';
import { FileUploadComponent } from './file-upload.component';

@NgModule({
  declarations: [FileUploadComponent, PhotoGuidelinesComponent],
  imports: [CommonModule, CardModule, SecureMessageComponent, PrimeFileUploadModule],
  exports: [FileUploadComponent],
})
export class FileUploadModule {}
