import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import LOANS from '../../../assets/mock-data/loans';
import LOGGED_IN_USER from '../../../assets/mock-data/logged-in-user';
import { Models } from '../../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  loans$ = new BehaviorSubject<Models.Loan[]>(LOANS).asObservable();
  userName$ = new BehaviorSubject<Models.LoggedInUser>(LOGGED_IN_USER).asObservable().pipe(map(user => user.name));
}
