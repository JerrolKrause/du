import { SharedModule } from '$shared';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-help-panel',
  templateUrl: './help-panel.component.html',
  styleUrls: ['./help-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, CardModule, SharedModule],
})
export class HelpPanelComponent {
  protected phoneNumber$ = new BehaviorSubject('18448595091');
}
