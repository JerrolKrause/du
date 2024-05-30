import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-documents-checklist',
  templateUrl: './documents-checklist.component.html',
  styleUrls: ['./documents-checklist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentsChecklistComponent {}
