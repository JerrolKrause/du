import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-irs-verify-action',
  templateUrl: './irs-verify-action.component.html',
  styleUrls: ['./irs-verify-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IrsVerifyActionComponent {
  public upsell = input(false);
}
