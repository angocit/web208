import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  route = inject(ActivatedRoute)
  ngOnInit(){
    const keyword = this.route.snapshot.queryParams['keyword']
    console.log(keyword);
    
  }
}
