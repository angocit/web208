import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Sidebar } from "./sidebar/sidebar";

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, Header, Sidebar],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {
  bt_status:boolean = false;
  onClickButton=(value:boolean)=>{
    // console.log(value);  
    this.bt_status = value  
  }
}
