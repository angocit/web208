import { Component, Input } from '@angular/core';
import { IStudent } from '../../../interface/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  @Input() addStudent:any
name:string = ''
age:number =19
address:string =''
classname:string = ''
onAddStudent = ()=>{
  const data:IStudent = {
    name:this.name,
    age:this.age,
    address:this.address,
    classname:this.classname
  }
  this.addStudent(data)
}
}
