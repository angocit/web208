import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from '../../interface/student';

@Component({
  selector: 'app-studentedit',
  imports: [ReactiveFormsModule],
  templateUrl: './studentedit.html',
  styleUrl: './studentedit.css',
})
export class Studentedit {
studentfrm = new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(6)]),
      age: new FormControl(18,[Validators.required,Validators.min(0)]),
      email: new FormControl(''),
      phone: new FormControl('')
    })
    http = inject(HttpClient)
    router = new Router()
    route = inject(ActivatedRoute)
    studentid = this.route.snapshot.params["id"]
    ngOnInit(){
        this.http.get<IStudent>(`http://localhost:3000/students/${this.studentid}`).subscribe({
          next: value=>{
              this.studentfrm.controls.name.setValue(value.name)
              this.studentfrm.controls.age.setValue(value.age)
              this.studentfrm.controls.email.setValue(value.email)
              this.studentfrm.controls.phone.setValue(value.phone)
          }
        })
    }
    handleSubmit = ()=>{
        if (!this.studentfrm.valid) return;
        this.http.put(`http://localhost:3000/students/${this.studentid}`,this.studentfrm.value).subscribe({
          next:value=>{
            alert("Cập nhật thành công")
            this.router.navigate(['/admin/students'])
          },
          error:(err)=>{
            alert("Cập nhật thất bại")
          }
        })
    }
}
