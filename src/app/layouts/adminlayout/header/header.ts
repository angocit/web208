import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
    @Output() buttonstatus:EventEmitter<boolean> = new EventEmitter()
    button:boolean = false
    ChangeStatus = ()=>{
      this.button = !this.button
      this.buttonstatus.emit(this.button)
    }
}
