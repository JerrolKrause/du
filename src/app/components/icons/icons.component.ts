import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import {
  IconDefinition,
  faBars,
  faCaretDown,
  faChevronLeft,
  faChevronRight,
  faCog,
  faCogs,
  faCubes,
  faEnvelope,
  faExclamationCircle,
  faExclamationTriangle,
  faHome,
  faPhone,
  faPlus,
  faPowerOff,
  faQuestion,
  faRefresh,
  faSpinner,
  faTrash,
  faUser,
  faUsers,
  faX,
} from '@fortawesome/free-solid-svg-icons';

export type AvailableIcons =
  | 'phone'
  | 'envelope'
  | 'power-off'
  | 'spinner'
  | 'refresh'
  | 'plus'
  | 'exclamation-triangle'
  | 'exclamation-circle'
  | 'cog'
  | 'cogs'
  | 'trash'
  | 'user'
  | 'users'
  | 'caret-down'
  | 'bars'
  | 'home'
  | 'cubes'
  | 'question'
  | 'x'
  | 'chevron-left'
  | 'chevron-right'
  | 'check-circle-outline';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
})
export class IconsComponent implements OnInit {
  @Input() icon?: AvailableIcons | null = null;

  /** Map icon key to actual icon */
  public iconMap: { [key in AvailableIcons]: IconDefinition } = {
    phone: faPhone,
    envelope: faEnvelope,
    'power-off': faPowerOff,
    spinner: faSpinner,
    refresh: faRefresh,
    plus: faPlus,
    question: faQuestion,
    'exclamation-triangle': faExclamationTriangle,
    'exclamation-circle': faExclamationCircle,
    cog: faCog,
    cogs: faCogs,
    trash: faTrash,
    user: faUser,
    users: faUsers,
    'caret-down': faCaretDown,
    bars: faBars,
    home: faHome,
    cubes: faCubes,
    x: faX,
    'chevron-left': faChevronLeft,
    'chevron-right': faChevronRight,
    'check-circle-outline': faCheckCircle,
  };
  constructor() {}

  ngOnInit(): void {}
}
