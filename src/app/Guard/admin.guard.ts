import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const role:string = 'admin';
  const router = new Router()
  if (role === 'admin') {
    return true;
  }
  else {
    router.navigate([''])
    return false;
  }
};
