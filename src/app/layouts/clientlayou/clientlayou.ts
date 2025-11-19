import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-clientlayou',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './clientlayou.html',
  styleUrl: './clientlayou.css',
})
export class Clientlayou {

}
