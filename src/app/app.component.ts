import { Component } from '@angular/core';
import { IProduct, IProductLite } from './interface/product';
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
  products:IProductLite[] = [
    {
      name:"Sản phẩm 1",
      image:"https://img.muji.net/img/item/4550344275726_1260.jpg",
      price:10000
    },
    {
      name:"Sản phẩm 2",
      image:"https://sunwatch.vn/image/catalog/Sunwatch/Seiko-clock/QXA638S.jpg",
      price:20000
    }
  ];
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