import { Component, Input } from '@angular/core';
import { IStudent } from '../../../interface/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
    // @Input() students:IStudent[] = []
    students:IStudent[]=[
      {
        name:"SV 1",
        age:18,
        address:"HN",
        classname:"WD18337"
      },
      {
        name:"SV 2",
        age:19,
        address:"TN",
        classname:"WD18337"
      },
      {
        name:"SV 3",
        age:18,
        address:"HY",
        classname:"WD18337"
      }
    ]
}
