import { Component, inject } from '@angular/core';
import { Slider } from "../../components/slider/slider";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-home',
  imports: [Slider,NzButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
message = inject(NzMessageService)
handleMessage = ()=>{
  this.message.success("Bạn vừa click")
}
}
