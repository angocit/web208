import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  let user:any = localStorage.getItem("user")
  const router = new Router()
  if (user){
    user = JSON.parse(user)
    if (user.role =='admin')
      {
        return true
      }
    else {
      router.navigate(['login'])
      return false
    }
  }
  else {
    router.navigate(['login'])
      return false
  } 
};
