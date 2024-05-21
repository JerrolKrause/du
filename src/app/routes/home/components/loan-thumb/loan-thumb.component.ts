import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Models } from '../../../../shared/models';

@Component({
  selector: 'app-loan-thumb',
  templateUrl: './loan-thumb.component.html',
  styleUrls: ['./loan-thumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanThumbComponent {
  public loan = input.required<Models.Loan>();
}
