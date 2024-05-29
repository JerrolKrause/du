import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-plaid-verify-action',
  templateUrl: './plaid-verify-action.component.html',
  styleUrls: ['./plaid-verify-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PlaidVerifyActionComponent {
  public upsell = input(false);
}
