import { Component, Input } from '@angular/core';
import { ITodo } from '../../interfaces/todo';

@Component({
  selector: 'app-todoitem',
  imports: [],
  templateUrl: './todoitem.html',
  styleUrl: './todoitem.css',
})
export class Todoitem {
  @Input() todo:ITodo = {} as ITodo
  @Input() isFirst:boolean = true
  @Input() isLast:boolean = true
  @Input() index:number = 0
}
