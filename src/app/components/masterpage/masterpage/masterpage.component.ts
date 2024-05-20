import { isBrowser } from '$shared';
import { Component } from '@angular/core';

@Component({
  selector: 'app-masterpage',
  styleUrls: ['./masterpage.component.scss'],
  templateUrl: './masterpage.component.html',
})
export class MasterpageComponent {
  public isBrowser = isBrowser;

  constructor() {}
}
