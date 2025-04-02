import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/admin/header/header.component';
import { SidebarComponent } from '../../components/admin/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [HeaderComponent,SidebarComponent,RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
