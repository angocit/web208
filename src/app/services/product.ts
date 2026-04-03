import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class Product {
  http = inject(HttpClient)
  // Danh sách
  API_URL = 'http://localhost:3000/products'
  getAll = ()=>{
    return this.http.get<IProduct[]>(this.API_URL)
  }
  // Lấy chi tiết
  getByID = (id:number)=>{
    return this.http.get<IProduct>(this.API_URL+`/${id}`)
  }
  // Thêm mới
  Add = (data:Omit<IProduct,'id'>)=>{
    return this.http.post<IProduct>(this.API_URL,data)
  }
  // Sửa
  Edit = (data:Omit<IProduct,'id'>,id:number)=>{
    return this.http.put<IProduct>(this.API_URL+`/${id}`,data)
  }
  // Xóa
  Delete = (id:number)=>{
    return this.http.delete(this.API_URL+`/${id}`)
  }
}
