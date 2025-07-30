import { Component, inject } from '@angular/core';
import { IProduct } from '../../../interface/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productlist',
  imports: [],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css'
})
export class Productlist {
//  C1: constructor(http:HttpClient){}
// C2:
  http = inject(HttpClient)
  products:IProduct[]=[]
  ngOnInit(){
      // this.http.get(`http://localhost:3000/products`)
      // .subscribe(
      //   data=>console.log(data),
      //   err=>{
      //     console.log(`Lỗi nếu có: ${err}`);          
      //   }        
      // )
      // Đầy đủ:
      this.http.get(`http://localhost:3000/products`)
      .subscribe(
       {
        next: (data:any)=>{
          // console.log(data); 
          this.products = data         
        },
        error: (err)=>{
          console.log(err);          
        },
        complete:()=>{
          console.log("Hoàn thành");
          
        }
       }      
      )
  }
}
