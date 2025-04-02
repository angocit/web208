import { Routes } from '@angular/router';
import { adminGuard } from './Guard/admin.guard';
import { ClientComponent } from './layout/client/client.component';
import { HomeComponent } from './components/client/home/home.component';
import { AdminComponent } from './layout/admin/admin.component';
import { LoginComponent } from './components/client/login/login.component';
import { RegisterComponent } from './components/client/register/register.component';
import { AddComponent } from './components/product/add/add.component';

export const routes: Routes = [
    {path:"",component:ClientComponent,children:[
        {path:"",component:HomeComponent},
        {path:"login",component:LoginComponent},
        {path:"register",component:RegisterComponent}
    ]},
    {path:"admin",component:AdminComponent,children:[
        {path:"product/add",component:AddComponent}
    ]}   
    
];
