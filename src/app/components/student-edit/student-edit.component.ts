import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { StudentService } from '../../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from '../../../interface/student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrl: './student-edit.component.css'
})
export class StudentEditComponent {
  constructor(private route:ActivatedRoute, private studentService: StudentService,private messageService: MessageService){}
  studentform = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(7)]),
      age: new FormControl(18),
      address: new FormControl('',[Validators.required]),
      classname: new FormControl('',[Validators.required])
  })
  studentID = this.route.snapshot.params['id']
  ngOnInit(){
      this.studentService.Get_Student_By_ID(this.studentID).subscribe(data=>{
        console.log(data);
        this.studentform.controls.name.setValue(data.name)
        this.studentform.controls.age.setValue(data.age)
        this.studentform.controls.address.setValue(data.address)
        this.studentform.controls.classname.setValue(data.classname)
      })
  }
  router = new Router()
  onSubmit =()=>{
      this.studentService.Update_Student(this.studentID,this.studentform.value as IStudent)
      .subscribe(data=>{
          alert("Cập nhật thành công");
          this.router.navigate(['dashboard/students'])
      })
  }
}
