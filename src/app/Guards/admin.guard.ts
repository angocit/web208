import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const user = {
    username:'Ngoc',
    role:'admin'
  }
  if (user.role === 'admin') {
    return true;
  }
  else {
    return false
  }
};
