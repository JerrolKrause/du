import { Models } from '$shared';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Route only UI state
 * By default they are not injected in root since they are only needed by this route
 */
@Injectable()
export class RouteUiService {
  otpMethod$ = new BehaviorSubject(Models.OtpMethod.SMS);

  updateOtpMethod(method: Models.OtpMethod) {
    this.otpMethod$.next(method);
  }
}
