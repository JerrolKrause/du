import { Models } from '$shared';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-loan-back-nav',
  templateUrl: './loan-back-nav.component.html',
  styleUrls: ['./loan-back-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanBackNavComponent {
  public loanDetails = input.required<Models.LoanDetails | null>();
}
