import { Models } from '$shared';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-verification-task',
  templateUrl: './verification-task.component.html',
  styleUrls: ['./verification-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerificationTaskComponent {
  public verificationTask = input.required<Models.Verification>();
}
