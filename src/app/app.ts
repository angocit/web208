import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { NgClass } from "../../node_modules/@angular/common/types/_common_module-chunk";
import { FormsModule } from '@angular/forms';
interface ITodo{
  name:string;
  priority:string
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('wd20309');
  title:string = 'Xin chào WD20309'
  name:string='text-red'
  show:boolean = false
  background:string = 'yellow'
  keywords:string = 'Từ khóa'
  todos:ITodo[]= [
    {
      name:"Đi học",
      priority:"Cao"
    },
    {
      name:"Đi làm thêm",
      priority:"Trung bình"
    }
  ]
  handleClick = ()=>{
    this.name = 'ahihihi'
    // this.show = true
    // if (this.show){
    //   this.show = false
    // }
    // else {
    //   this.show=true
    // }
    // this.show = !this.show
    this.background = 'blue'
  }
  handleShowHide = ()=>{
      this.show = !this.show
  }
}
