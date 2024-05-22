import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no-content',
  template: `
    <app-masterpage>
      <div>
        <h1>404: page missing</h1>
        <p><a routerLink="/">Click here to go to the homepage.</a></p>
      </div>
    </app-masterpage>
  `,
  styleUrls: ['./no-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoContentComponent {}
