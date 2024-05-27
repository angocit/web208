import { Component, Input } from '@angular/core';
import { IStudent } from '../../../interface/student';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { DomSanitizer } from '@angular/platform-browser';
import { StudentService } from '../../student.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
    // @Input() students:IStudent[] = []
    constructor(private studentService: StudentService,private messageService: MessageService){}
    studentform = new FormGroup({
        name: new FormControl('',[Validators.required,Validators.minLength(7)]),
        age: new FormControl(18),
        address: new FormControl('',[Validators.required]),
        classname: new FormControl('',[Validators.required])
    })
    students:IStudent[]=[]
    ngOnInit(){
        this.studentService.Get_All_Students().subscribe(data=>{
              console.log(data);
             this.students = data 
        })
    }
    onSubmit =()=>{
        this.studentService.Add_Student(this.studentform.value as IStudent).subscribe(data=>{
          console.log(data); 
          // alert('Thêm thành công')
          this.students.push(data as IStudent); 
          this.messageService.add({ severity: 'error', summary: 'Success', detail: 'Thêm thành công' }); 
        })
    }
}
