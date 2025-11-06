import { Component } from '@angular/core';
interface IMenu{
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
    logo:string = "WD20204"
    display(){
      return `Xin chào ${this.logo}`
    }
    menus:IMenu[] = [
      {
        id:1,
        name:"Trang chủ",
        url:"/"
      },
      {
        id:2,
        name:"Shop",
        url:"/shop"
      },
      {
        id:3,
        name:"Liên hệ",
        url:"/contact"
      }
    ]
    show:boolean = true 
}
