import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrl: './productedit.component.css'
})
export class ProducteditComponent {
//  route = inject(ActivatedRoute) // Cách 1
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    const productid = this.route.snapshot.params['id']
      console.log(productid);
      
  }
}
