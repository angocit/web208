import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './layout/client/client.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { Page404Component } from './components/page404/page404.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddproductComponent } from './components/admin/addproduct/addproduct.component';
import { adminGuard } from './Guard/admin.guard';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  {path:'',component:ClientComponent,children:[
      {path:'products',component:ProductListComponent},
      {path:'product/:id',component:ProductDetailComponent},
      {path:'about-us',component:AboutUsComponent},
      {path:'contact',component:ContactComponent},
      {path:'register',component:RegisterComponent},
      {path:'login',component:LoginComponent},
  ]},
  {path:'dashboard',component:AdminComponent,canActivate:[adminGuard], children:[
    {path:'add-product',component:AddproductComponent},
    {path:'edit-product/:id',component:EditProductComponent}
  ]},
  {path:'**',component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
