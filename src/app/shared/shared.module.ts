import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Pipes, Angular
import { CurrencyPipe, DatePipe } from '@angular/common';
// Pipes, Custom
import {
  CountPipe,
  DebouncePipe,
  DurationPipe,
  FilterPipe,
  HtmlRemovePipe,
  LimitPipe,
  PhoneNumberPipe,
  SafeHtmlPipe,
  SlugPipe,
  SortPipe,
  StringPipe,
  TextCasePipe,
} from './pipes';
// Directives
import { RouterModule } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FocusDirective, FullScreenDirective } from './directives';
import { LoanStatusPipe } from './pipes/loan-status.pipe';
import { SafeLoanIdPipe } from './pipes/safe-loan-id.pipe';

// Pipes + Directives
export const APP_PIPES_DIRECTIVES = [
  // Pipes
  CountPipe,
  DebouncePipe,
  PhoneNumberPipe,
  DurationPipe,
  FilterPipe,
  HtmlRemovePipe,
  SafeHtmlPipe,
  SlugPipe,
  SortPipe,
  StringPipe,
  TextCasePipe,
  LimitPipe,
  SafeLoanIdPipe,
  LoanStatusPipe,

  // Directives
  FullScreenDirective,
  FocusDirective,
];

const MODULES = [
  // Angular
  RouterModule,
  ConfirmDialogModule,
  DynamicDialogModule,
];

@NgModule({
  imports: [CommonModule, MODULES],
  providers: [DatePipe, CurrencyPipe],
  declarations: [APP_PIPES_DIRECTIVES],
  exports: [APP_PIPES_DIRECTIVES, MODULES],
})
export class SharedModule {}
