import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('wd20307');
  title:string = 'Xin chào WD20307 - Ahihih'
  classname:string = "text-red"
  fontweight:string = 'font-bold'
  show:boolean = true
  color:string = 'red'
  chieudai:number = 0
  chieurong:number = 0
  dientich:number = 0
  handleClick=()=>{
    // alert("Ahihihi")
    this.classname = (this.classname=='text-red')?"text-blue":'text-red'
    this.show = !this.show
  }
  Caculator = ()=>{
    this.dientich = this.chieudai*this.chieurong
  }
}
