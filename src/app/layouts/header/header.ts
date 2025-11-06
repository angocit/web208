import { Component } from '@angular/core';
interface IMenu{
  id:number,
  name:string,
  url:string,
  parent:number
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
        url:"/",
        parent:0
      },
      {
        id:2,
        name:"Shop",
        url:"/shop",
        parent:0
      },
      {
        id:3,
        name:"Liên hệ",
        url:"/contact",
        parent:0
      },
      {
        id:4,
        name:"Quần áo",
        url:"/quan-ao",
        parent:2
      },
      {
        id:5,
        name:"Giày dép",
        url:"/giay-dep",
        parent:2
      },
      {
        id:6,
        name:"Phụ kiện",
        url:"/phu-kien",
        parent:2
      }
    ]
    show:boolean = true 
    isChildrentMenu(id:number){
      let check = false 
      for (let menu of this.menus){
        if (menu.parent==id){
          check = true
          break
        }
      }
      return check
    }
}
