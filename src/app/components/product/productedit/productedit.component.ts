import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productedit',
  imports: [],
  templateUrl: './productedit.component.html',
  styleUrl: './productedit.component.css'
})
export class ProducteditComponent {
   routes = inject(ActivatedRoute)
   ngOnInit(){
    const id = this.routes.snapshot.params["id"]
    const kw = this.routes.snapshot.queryParams["keyword"]
    console.log(`ID là: ${id}`);   
    console.log(`Keyword là: ${kw}`); 
   }
}
