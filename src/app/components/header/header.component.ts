import { Component } from '@angular/core';
import { IMenu } from '../../interface/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menus:IMenu[]=[
    {
      id:1,
      name:'Home',
      path:'',
      parent:0
    },
    {
    id:2,
    name:'About us',
    path:'about-us',
    parent:0
    },
    {
    id:3,
    name:'Products',
    path:'product',
    parent:0
    },
    {
    id:4,
    name:'Fashion',
    path:'fashion',
    parent:3
    },
    {
    id:5,
    name:'Jewelry',
    path:'jewelry',
    parent:3
    },
    {
    id:6,
    name:'Contact',
    path:'contact',
    parent:0
    }
  ]
  checkChildrent = (id:number,menu:IMenu[]):boolean=>{
    let check:boolean = false;
      menu.forEach(item=>{
        if (item.parent==id){
          check = true;
        }
      })
    return check;
  }
}
