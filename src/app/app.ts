import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { FormsModule } from '@angular/forms';
import { ITodo } from './interface/todo';
import { Todoitem } from './components/todoitem/todoitem';
import { IPost } from './interface/post';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,FormsModule,Todoitem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  changedt = inject(ChangeDetectorRef)
  // protected readonly title = signal('wd20307');
  title:string = 'Xin chào WD20307 - Ahihih'
  classname:string = "text-red"
  fontweight:string = 'font-bold'
  show:boolean = true
  color:string = 'red'
  chieudai:number = 0
  chieurong:number = 0
  dientich:number = 0
  name:string = ''
  priority:string = ''
  message:string = ''
  posts:IPost[] = []
  todos:ITodo[]=[
    {
      name:"Đi học",
      priority:"Cao"
    },
    {
      name:"Đi làm",
      priority:"Trung bình"
    },
    {
      name:"Tán gái",
      priority:"Trung bình"
    }
  ]
  handleClick=()=>{
    // alert("Ahihihi")
    this.classname = (this.classname=='text-red')?"text-blue":'text-red'
    this.show = !this.show
  }
  Caculator = ()=>{
    this.dientich = this.chieudai*this.chieurong
  }
  onChange =()=>{
    this.show = !this.show
  }
  onAddTodo =()=>{
    const newtodo:ITodo = {
      name:this.name,
      priority:this.priority
    }
    this.todos.push(newtodo)
    this.name=''
    this.priority=''
  }
  ChooseFn = (text:string)=>{
    this.message = text
  }
  async ngOnInit(){
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      this.posts = await res.json()
      this.changedt.markForCheck()
  }
}
