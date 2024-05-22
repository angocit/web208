import { Component, Input } from '@angular/core';
import { IStudent } from '../../../interface/student';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
    // @Input() students:IStudent[] = []
    constructor(public sanitizer: DomSanitizer){}
    studentform = new FormGroup({
        name: new FormControl('',[Validators.required,Validators.minLength(7)]),
        age: new FormControl(18),
        address: new FormControl('',[Validators.required,Validators.email]),
        classname: new FormControl('',[Validators.required,Validators.pattern('0+[0-9]{10}$')])
    })
  
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
    onSubmit =async ()=>{
        // Lấy dữ liệu từ form
        const studentdata:IStudent = this.studentform.value as IStudent
        const {data} = await axios.post(`http://localhost:3000/students`,studentdata)
        this.students.push(studentdata)
    }
}
