import { Models } from '$shared';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-verification-task',
  templateUrl: './verification-task.component.html',
  styleUrls: ['./verification-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerificationTaskComponent {
  protected readonly VerificationStatus = Models.VerificationStatus;

  public verificationTask = input.required<Models.Verification>();
  protected isActionable = computed(() => Models.ACTIONABLE_VERIFICATIONS.includes(this.verificationTask().status));
  protected route = computed(() => {
    if (this.isActionable()) {
      switch (this.verificationTask().type) {
        case Models.VerificationTypes.Identity:
          return 'identity';
        case Models.VerificationTypes.Income:
          return 'income';
        case Models.VerificationTypes.Vehicle:
          return 'vehicle';
      }
    }
    return null;
  });
}
