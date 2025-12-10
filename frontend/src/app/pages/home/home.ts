import { Component, inject } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-home',
  imports: [NzButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
message = inject(NzMessageService)
handleMessage = ()=>{
  this.message.success("Bạn vừa click")
}
}
