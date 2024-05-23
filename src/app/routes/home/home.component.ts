import { ApiService } from '$shared';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected loans$ = this.globalAPIStore.loans$;
  protected userName$ = this.globalAPIStore.loggedInUser$.pipe(map(user => user.name));

  constructor(private globalAPIStore: ApiService) {}
}
