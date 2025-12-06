import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";
type USERTYPE = {
accessToken:string,
user:any
}
export const adminGuard: CanActivateFn = (route, state) => {
  const user = {
    email:'angocit@gmail.com',
    role:'admin'
  }
  const router = new Router()
  let userinfo = localStorage.getItem("user")
  if (!userinfo) {
    router.navigate(['/login'])
    return false
  }
  const userobj = JSON.parse(userinfo) as USERTYPE
  const role = userobj?.user?.role||''
  const token = userobj?.accessToken||''
  // console.log(role);
  // console.log(token);
  const decoded = jwtDecode(token);
  console.log(decoded);
  const exp = decoded.exp||0
  const now = Date.now()/1000
  if (role=='admin'&&exp>now) return true
  else {
    router.navigate(['/login'])
    return false
  }
};
