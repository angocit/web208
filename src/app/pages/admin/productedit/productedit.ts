import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productedit',
  imports: [],
  templateUrl: './productedit.html',
  styleUrl: './productedit.css',
})
export class Productedit {
  routes = inject(ActivatedRoute)
  ngOnInit(){
    const id = this.routes.snapshot.params["id"]
    console.log(id);
    
  }
}
