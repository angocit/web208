import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  @Input() addStudent:any
  name:string=''
  age:number = 18
  address:string = ''
  classname:string = ''  
  onAddStudent = ()=>{
    this.addStudent({name:this.name, age:this.age, address:this.address,classname:this.classname})
  }
}
