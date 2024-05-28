import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-income-manual',
  templateUrl: './income-manual.component.html',
  styleUrls: ['./income-manual.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomeManualComponent {}
