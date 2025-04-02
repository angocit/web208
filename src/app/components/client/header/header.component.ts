import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMenu } from '../../../interface/menu';

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
		id:7,
		name:"Clother",
		url:"/clother",
		parent:3
	},
	{
		id:8,
		name:"TShirt",
		url:"/tshirt",
		parent:3
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
GenMenu=(menulist:IMenu[],parent:number=0)=>{
let menu = `<ul>`
if (parent==0){
	menu = `<ul class='flex gap-4'>`
}
		for (let item of menulist){
			if (item.parent == parent){
				menu += `<li>
					<a href="${item.url}">${item.name}</a>
					${(this.checkChildren(menulist,item.id!))?this.GenMenu(menulist,item.id):""}
				</li>`
			}
		}
	menu +=`</ul>`
	return menu
}
}
