import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('wd20307');
  title:string = 'Xin chào WD20307 - Ahihih'
  classname:string = "text-red"
  handleClick=()=>{
    // alert("Ahihihi")
    this.classname = "text-blue"
  }
}
