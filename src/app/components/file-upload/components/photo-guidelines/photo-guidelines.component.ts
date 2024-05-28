import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-photo-guidelines',
  templateUrl: './photo-guidelines.component.html',
  styleUrls: ['./photo-guidelines.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoGuidelinesComponent {
  public label = input('Please confirm');
}
