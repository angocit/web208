import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { NgClass } from "../../node_modules/@angular/common/types/_common_module-chunk";
import { FormsModule } from '@angular/forms';
import { ITodo } from './interfaces/todo';
import { Todoitem } from './components/todoitem/todoitem';
import type { IPost } from './interfaces/post';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('wd20309');
  
}
