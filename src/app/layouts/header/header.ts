import { Component } from '@angular/core';
interface Imenu{
  id:number,
  name:string,
  url:string
}
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  logo:string = "WD20203"
  date = new Date()
  menus:Imenu[] = [
    {
      id:1,
      name:"Trang chủ",
      url: '/'
    },
    {
      id:2,
      name:"Shop",
      url: '/shop'
    },
    {
      id:3,
      name:"Liên hệ",
      url: '/contact'
    }
  ]
}
