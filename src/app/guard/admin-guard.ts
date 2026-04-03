import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const user = {
    email:"ngocnv34@fe.edu.vn",
    role:"admin"
  }
  const router= new Router()
  if (user.role=='admin'){
    return true;
  }
  else{
    router.navigate(['/'])
    return false
  }
};
