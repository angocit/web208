import { Component, Input } from '@angular/core';
import { ITodo } from '../../interface/todo';

@Component({
  selector: 'app-todoitem',
  imports: [],
  templateUrl: './todoitem.html',
  styleUrl: './todoitem.css',
})
export class Todoitem {
  @Input() todo:ITodo = {} as ITodo
  @Input() first:boolean = true
  @Input() last:boolean = true
  @Input() index:number = 0
  @Input() even:boolean = true 
}
