import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormGroupName, ReactiveFormsModule, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-productadd',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './productadd.component.html',
  styleUrl: './productadd.component.css'
})
export class ProductaddComponent {
    productform = new FormGroup({
      name:new FormControl(''),
      image:new FormControl(''),
      price: new FormControl('')    
   })
}
