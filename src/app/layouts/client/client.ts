import { Component } from '@angular/core';
import { Header } from "./header/header";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-client',
  imports: [Header,RouterOutlet],
  templateUrl: './client.html',
  styleUrl: './client.css'
})
export class Client {

}
