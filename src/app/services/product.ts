import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
    API_URL ="http://localhost:3000/products"
    http = inject(HttpClient)
    GetALL = ():Observable<IProduct[]>=>{
      return this.http.get<IProduct[]>(this.API_URL)
    }
    Add = (data:IProduct):Observable<IProduct>=>{
      return this.http.post<IProduct>(this.API_URL,data)
    }
    Edit = (data:IProduct,id:number|string):Observable<IProduct>=>{
      return this.http.put<IProduct>(this.API_URL+'/'+id,data)
    }
    Delete = (id:number|string):Observable<IProduct>=>{
      return this.http.delete<IProduct>(this.API_URL+'/'+id)
    }
}
