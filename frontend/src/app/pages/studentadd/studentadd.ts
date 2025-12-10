import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentadd',
  imports: [ReactiveFormsModule],
  templateUrl: './studentadd.html',
  styleUrl: './studentadd.css',
})
export class Studentadd {
    studentfrm = new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(6)]),
      age: new FormControl(18,[Validators.required,Validators.min(0)]),
      email: new FormControl(''),
      phone: new FormControl('')
    })
    http = inject(HttpClient)
    router = new Router()
    handleSubmit = ()=>{
        if (!this.studentfrm.valid) return;
        this.http.post('http://localhost:3000/students',this.studentfrm.value).subscribe({
          next:value=>{
            alert("Thêm mới thành công")
            this.router.navigate(['/admin/students'])
          },
          error:(err)=>{
            alert("Thêm mới thất bại")
          }
        })
    }
}
