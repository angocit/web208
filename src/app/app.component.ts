import { Component } from '@angular/core';
import { IProduct } from './interface/product';
import { IStudent } from './interface/student';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styles: `
    h1{text-transform:uppercase}
  `
})
export class AppComponent {
  title = 'web208';
  students:IStudent[]=[
    {
      name: "SV FPL 1",
      age: 18,
      address:"Hà Nội",
      classname:'WD18333'
    },
    {
      name: "SV FPL 2",
      age: 20,
      address:"Trịnh Văn Bô",
      classname:'WD18333'
    }
  ]
  addStudent = (data:IStudent)=>{
      this.students.push(data);
  }
}