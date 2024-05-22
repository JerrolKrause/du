import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-help-panel',
  templateUrl: './help-panel.component.html',
  styleUrls: ['./help-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpPanelComponent {
  protected phoneNumber$ = new BehaviorSubject('18448595091');
}
