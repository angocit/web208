import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const user = {
    name:"Ngoc",
    role:"admin"
  }
  if (user.role=='admin'){
    return true;
  }
 else {
  return false;
 }
};
