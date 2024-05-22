import { Models } from '$shared';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loan-thumb',
  templateUrl: './loan-thumb.component.html',
  styleUrls: ['./loan-thumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanThumbComponent {
  public loan = input.required<Models.Loan>();
  protected readonly LoanStatus = Models.LoanStatus;
  protected readonly faChevronRight = faChevronRight;
}
