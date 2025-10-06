import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UsersService } from '../services/users';

export const authGuard: CanActivateFn = () => {
  const users = inject(UsersService);
  const router = inject(Router);

  const user = users.getCurrentUser();
  return user ? true : router.createUrlTree(['/login']);
};