import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-veriff-verify-action',
  templateUrl: './veriff-verify-action.component.html',
  styleUrls: ['./veriff-verify-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class VeriffVerifyActionComponent {
  public upsell = input(false);
}
