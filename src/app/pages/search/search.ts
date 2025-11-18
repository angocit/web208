import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../interface/product';
import { Productitem } from '../../conponents/productitem/productitem';

@Component({
  selector: 'app-search',
  imports: [Productitem],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  route = inject(ActivatedRoute)
  keyword = this.route.snapshot.queryParams["kw"]
  products:IProduct[] =[]
  async ngOnInit(){
     try {
        const res = await fetch(`http://localhost:3000/products?name_like=${this.keyword}`)
        this.products = await res.json()
      } catch (error) {
        console.log(error);        
      } 
  }
}
