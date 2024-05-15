import { Component } from '@angular/core';
import { IMenu } from '../../../interface/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menus:IMenu[] = [
    {
      id:1,
      name:'Home',
      path:'home',
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
  checkChildrent = (menuid:number):boolean=>{
    let check:boolean = false;
    for (let item of this.menus){
        if (item.parent===menuid){
          check = true;
        }
    }
    return check;
  }
}
