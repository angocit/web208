import { Routes } from '@angular/router';
import { ProductaddComponent } from './components/product/productadd/productadd.component';
import { ProducteditComponent } from './components/product/productedit/productedit.component';
import { LoginComponent } from './components/login/login.component';
import { adminGuard } from './Guard/admin.guard';
import { RegisterComponent } from './components/register/register.component';
import { ClientComponent } from './layout/client/client.component';
import { HomeComponent } from './component/client/home/home.component';
import { AdminComponent } from './layout/admin/admin.component';

export const routes: Routes = [
    {path:"",component:ClientComponent,children:[
        {path:"",component:HomeComponent},
        {path:"login",component:LoginComponent},
        {path:"register",component:RegisterComponent}
    ]},
    {path:"admin",component:AdminComponent,children:[
        {path:"product-add",component:ProductaddComponent},
        {path:"product-edit/:id",component:ProducteditComponent},
    ]}   
    
];
