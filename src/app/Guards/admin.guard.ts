import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const userservice = inject(UserService)
  const router = new Router();
  if (userservice.CheckUserValid()) {
    return true;
  }
  else {
    router.navigate(['login'])
    return false
  }
};
