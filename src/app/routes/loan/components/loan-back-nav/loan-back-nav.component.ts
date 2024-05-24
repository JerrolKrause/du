import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { RouteApiService } from '../../shared/store/api/route-api.service';

@Component({
  selector: 'app-loan-back-nav',
  templateUrl: './loan-back-nav.component.html',
  styleUrls: ['./loan-back-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanBackNavComponent {
  protected readonly faChevronLeft = faChevronLeft;

  constructor(protected routeApi: RouteApiService) {}
}
