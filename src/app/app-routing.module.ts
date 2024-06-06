import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:"product",component:ProductComponent},
  {path:"product/add",component:ProductAddComponent},
  {path:"product/update/:id",component:ProductUpdateComponent},
  {path:"signup",component:SignupComponent},
  {path:"signin",component:SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
