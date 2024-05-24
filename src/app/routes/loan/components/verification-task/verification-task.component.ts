import { Models } from '$shared';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-verification-task',
  templateUrl: './verification-task.component.html',
  styleUrls: ['./verification-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerificationTaskComponent {
  public verificationTask = input.required<Models.Verification>();
  protected isActionable = computed(() => Models.ACTIONABLE_VERIFICATIONS.includes(this.verificationTask().status));
}
