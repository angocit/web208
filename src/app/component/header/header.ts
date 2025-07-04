import { Component } from '@angular/core';
import { IMenu } from '../../interface/menu';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
   title:string = "wd20105"
   member:string[]=["Ngoc","Minh","Linh","An"]
   menus:IMenu[]=[
    {
      id:1,
      name:"Trang chủ",
      url:"/"
    },
    {
      id:2,
      name:"Sản phẩm",
      url:"/shop"
    },
    {
      id:3,
      name:"Tin tức",
      url:"/tin-tuc"
    },
    {
      id:4,
      name:"Liên hệ",
      url:"/lien-he"
    }
   ]
}
