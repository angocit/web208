import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";
import type {JwtPayload} from "jwt-decode";
export const adminGuard: CanActivateFn = (route, state) => {
  const token = sessionStorage.getItem('token')
  const router = new Router()
  if (token) 
  {
    const tkdecoded = jwtDecode<JwtPayload>(token); 
    // console.log(tkdecoded);
    const now = Date.now()/1000
    // console.log(now);
    // console.log(tkdecoded.sub);
    
    if (tkdecoded.sub == '3'&&tkdecoded.exp&&tkdecoded.exp>now)
      {
        return true
      }
      router.navigate(['/'])
      return false   
  }
  // const user = {
  //   email:"ngocnv34@fe.edu.vn",
  //   role:"user"
  // }
  // if (user.role=='admin') return true;
  
  router.navigate(['/'])
  return false
};
