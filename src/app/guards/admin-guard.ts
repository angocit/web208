import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const user = {
    username:"admin",
    role:"admin"
  }
  const router = new Router;
  if (user.role=="admin"){
    return true
  }
  else {
    // CHuyển hướng về trang login
    router.navigate(['login'])
    return false
  }
};
