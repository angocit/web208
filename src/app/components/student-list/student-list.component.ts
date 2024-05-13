import { Component, Input } from '@angular/core';
import { IStudent } from '../../interface/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  @Input() students:IStudent[] = []
  display:boolean = true
  ShowHide = ()=>{
    this.display = !this.display
  }
  menu = [
   {id: 1,
    name:"",
    parent:0,
    path:'fdfdf'
   },
   {id: 2,
    name:"sdfds",
    parent:0,
    path:'fdfdf'
   },
   {id: 3,
    name:"sdfds",
    parent:0,
    path:'fdfdf'
   },
   {id: 4,
    name:"sdfsdf",
    parent:1,
    path:'fdfdf'
   },
  ]
}
