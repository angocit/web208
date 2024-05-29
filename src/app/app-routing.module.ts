import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './layout/client/client.component';
import { AdminComponent } from './layout/admin/admin.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { Page404Component } from './components/page404/page404.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { adminGuard } from './Guards/admin.guard';
import { EditProductComponent } from './components/edit-product/edit-product.component';

const routes: Routes = [
  {path:'',component:ClientComponent,children:[
    {path:'',component:HomeComponent}    
  ]},
  {path:'admin',component:AdminComponent,canActivate:[adminGuard],children:[
    {path:'product',component:ProductComponent},
    {path:'product/:id',component:ProductDetailComponent},
    {path:'product/edit/:id',component:EditProductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
