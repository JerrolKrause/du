import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import LOGGED_IN_USER from '../../../assets/mock-data/logged-in-user';
import { Models } from '../../shared/models';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanComponent {
  userName$ = new BehaviorSubject<Models.LoggedInUser>(LOGGED_IN_USER).asObservable().pipe(map(user => user.name));
}
