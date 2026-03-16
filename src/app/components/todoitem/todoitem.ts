import { Component, Input } from '@angular/core';
import { ITodo } from '../../interfaces/todo';
type TTodo={
  todo:ITodo,
  isFirst:boolean,
  isLast:boolean,
  index:number
}
@Component({
  selector: 'app-todoitem',
  imports: [],
  templateUrl: './todoitem.html',
  styleUrl: './todoitem.css',
})

export class Todoitem {
  @Input() todoinfo:TTodo = {} as TTodo
}
