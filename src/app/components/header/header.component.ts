import { Component } from '@angular/core';
import { IMenu } from '../../interface/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 title:string = "Hello Kitty"
 menus:IMenu[] = [
	{
		id:1,
		name:"Trang chủ",
		url:"/",
		parent:0
	},
	{
		id:2,
		name:"Danh mục",
		url:"/danh-muc",
		parent:0
	},
	{
		id:3,
		name:"Fashion",
		url:"/fashion",
		parent:2
	},
	{
		id:4,
		name:"Other",
		url:"/other",
		parent:2
	}
	,
	{
		id:5,
		name:"Tin tức",
		url:"/tin-tuc",
		parent:0
	},
	{
		id:6,
		name:"Liên hệ",
		url:"/lien-he",
		parent:0
	}
]
checkChildren = (menulist:IMenu[],id:number)=>{
    let check = false;
    for (let item of menulist){
        if (item.parent==id){
           check = true;
           break;
        }
    }
    return check;
}
}
