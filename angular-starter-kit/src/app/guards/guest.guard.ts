import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';

export const guestGuard: CanActivateFn = (_route, _state) => {
  const router = inject(Router);
  const auth = inject(AuthService);

  if (auth.isSignedIn()) {
    router.navigate([`/${environment.startupUrl}`]);
    return false;
  }

  return true;
};
