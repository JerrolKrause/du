import { Models } from '$shared';
import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouteApiService } from 'src/app/routes/loan/shared/store/api/route-api.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadComponent {
  private step = signal(0);

  public loanId = input.required<number>();
  public type = input.required<Models.VerificationTypes>();
  public label = input.required<string>();
  public backFunction = input<() => void>();

  protected showBackButton = computed(() => (this.backFunction() && 0 === this.step()) || this.step() > 0);

  protected back() {
    const back = this.backFunction();

    if (0 === this.step() && back) {
      back();
    }
  }

  protected actions: MenuItem[] = [
    {
      label: 'New',
      command: () => this.setVerification(Models.VerificationStatus.New),
    },
    // {
    //   label: 'Pending',
    //   command: () => this.setVerification(Models.VerificationStatus.Pending),
    // },
    // {
    //   label: 'Action Required',
    //   command: () => this.setVerification(Models.VerificationStatus.ActionRequired),
    // },
    {
      label: 'Verified',
      command: () => this.setVerification(Models.VerificationStatus.Verified),
    },
  ];

  constructor(public loanApiService: RouteApiService) {}

  protected setVerification(status: Models.VerificationStatus) {
    this.loanApiService.verify(this.loanId(), this.type(), status);
  }
}
