import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadComponent {
  private step = signal(0);

  public label = input.required<string>();
  public backFunction = input<() => void>();

  protected showBackButton = computed(() => (this.backFunction() && 0 === this.step()) || this.step() > 0);

  protected back() {
    const back = this.backFunction();

    if (0 === this.step() && back) {
      back();
    }
  }
}
