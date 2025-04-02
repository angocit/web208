import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/client/header/header.component';
import { FooterComponent } from '../../components/client/footer/footer.component';

@Component({
  selector: 'app-client',
  imports: [RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

}
