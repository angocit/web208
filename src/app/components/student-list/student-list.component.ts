import { Component, Input } from '@angular/core';
import { IStudent } from '../../../interface/student';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { DomSanitizer } from '@angular/platform-browser';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
    // @Input() students:IStudent[] = []
    constructor(private studentService: StudentService){}
    studentform = new FormGroup({
        name: new FormControl('',[Validators.required,Validators.minLength(7)]),
        age: new FormControl(18),
        email: new FormControl('',[Validators.required,Validators.email]),
        phone: new FormControl('',[Validators.required,Validators.pattern('0+[0-9]{9}$')])
    })
    students:IStudent[]=[]
    ngOnInit(){
        this.studentService.Get_All_Students().subscribe(data=>{
              console.log(data);
             this.students = data 
        })
    }
    onSubmit =()=>{
        // Lấy dữ liệu từ form
        const studentdata:IStudent = this.studentform.value as IStudent
        // const {data} = await axios.post(`http://localhost:3000/students`,studentdata)
        // this.students.push(studentdata)
    }
}
