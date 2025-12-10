import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { IStudent } from '../../interface/student';

@Component({
  selector: 'app-studentlist',
  imports: [],
  templateUrl: './studentlist.html',
  styleUrl: './studentlist.css',
})
export class Studentlist {
   http = inject(HttpClient)
   students:IStudent[] = []
   ngOnInit(){
      this.http.get<IStudent[]>(`http://localhost:3000/students`).subscribe({
        next:value=>this.students=value,
        error: (err)=>console.log(err)        
      })
   }
   handleDelete = (id:number)=>{
      if (!confirm("Bạn chắc chứ?")) return ;
      this.http.delete(`http://localhost:3000/students/${id}`).subscribe({
        next:(value)=>{
          alert("Xóa thành công")
          this.students = this.students.filter(item=>item.id!=id)
        },
        error: ()=>alert("Xóa thất bại")
      })
   }
}
