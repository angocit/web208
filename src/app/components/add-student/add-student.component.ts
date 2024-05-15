import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStudent } from '../../interface/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  // @Input() addStudent:any
  @Output() addStudent = new EventEmitter<IStudent>();
  name:string=''
  age:number = 19
  address:string = ''
  classname:string = ''
  onAddStudent=()=>{
    // this.addStudent({
    //   name:this.name,
    //   age:this.age,
    //   address:this.address,
    //   classname:this.classname
    // })
    this.addStudent.emit(
      {
          name:this.name,
          age:this.age,
          address:this.address,
          classname:this.classname
        }
    )
  }
}
