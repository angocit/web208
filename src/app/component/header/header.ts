import { Component } from '@angular/core';
import { IMenu } from '../../interface/menu';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
   title:string = "wd20105"
   keywords:string = "Sản phẩm a"
   member:string[]=["Ngoc","Minh","Linh","An"]
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
		parent:2
	},
	{
		id:8,
		name:"TShirt",
		url:"/tshirt",
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
}
