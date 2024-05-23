import { Models } from '$shared';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verificationType',
  pure: true,
})
export class VerificationTypePipe implements PipeTransform {
  transform(value: Models.VerificationTypes): string {
    switch (value) {
      case Models.VerificationTypes.Identity:
        return 'identity';
      case Models.VerificationTypes.Income:
        return 'income';
      case Models.VerificationTypes.Vehicle:
        return 'vehicle information';
      default:
        return 'Unknown';
    }
  }
}
