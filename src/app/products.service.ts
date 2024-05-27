import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http:HttpClient) { }
  API_URL = 'http://localhost:3000/products'
  Get_All_Products = ():Observable<any>=>{
      return this.http.get(this.API_URL)
  }
}
