import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  // let user:any = localStorage.getItem("user")
  // if (user){
  //   user = JSON.parse(user)
  // }
  const router = new Router()
  const user = {
    username:'admin',
    role:'admin'
  }
  if (user.role =='admin')
  {
    return true
  }
  else {
    router.navigate(['login'])
    return false
  }
};
