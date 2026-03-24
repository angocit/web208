import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productedit',
  imports: [],
  templateUrl: './productedit.html',
  styleUrl: './productedit.css',
})
export class Productedit {
  route = inject(ActivatedRoute)
  ngOnInit(){
    const id = this.route.snapshot.params['id']
    console.log(id);    
  }
}
