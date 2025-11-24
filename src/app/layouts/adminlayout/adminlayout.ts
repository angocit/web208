import { Component } from '@angular/core';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-adminlayout',
  imports: [Header,Sidebar,RouterOutlet],
  templateUrl: './adminlayout.html',
  styleUrl: './adminlayout.css',
})
export class Adminlayout {
bt_status:boolean = false;
  onClickButton=(value:boolean)=>{
    // console.log(value);  
    this.bt_status = value  
  }
}
