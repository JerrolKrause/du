import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-secure-message',
  templateUrl: './secure-message.component.html',
  styleUrls: ['./secure-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SecureMessageComponent {}
