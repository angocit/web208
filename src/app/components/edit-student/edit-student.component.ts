import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent {
  router = inject(ActivatedRoute)
  studentform = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(7)]),
    age: new FormControl(18),
    email: new FormControl('',[Validators.required,Validators.email]),
    phone: new FormControl('',[Validators.required,Validators.pattern('0+[0-9]{9}$')])
  })
  async ngOnInit(){
    const studentid = this.router.snapshot.params['id']
      const {data} = await axios.get(`http://localhost:3000/students/${studentid}`)
      this.studentform.controls.name.setValue(data.name)
      this.studentform.controls.age.setValue(data.age)
      this.studentform.controls.email.setValue(data.email)
      this.studentform.controls.phone.setValue(data.phone)
  }
  onEditStudent = async ()=>{
    const studentid = this.router.snapshot.params['id']
    const {data} = await axios.put(`http://localhost:3000/students/${studentid}`,this.studentform.value)
    alert('Cập nhật thành công')
  }
}
