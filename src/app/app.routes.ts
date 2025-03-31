import { Routes } from '@angular/router';
import { ProductaddComponent } from './components/product/productadd/productadd.component';
import { ProducteditComponent } from './components/product/productedit/productedit.component';
import { LoginComponent } from './components/login/login.component';
import { adminGuard } from './Guard/admin.guard';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {path:"product-add",component:ProductaddComponent},
    {path:"product-edit/:id",component:ProducteditComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
];
