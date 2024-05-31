import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './layout/client/client.component';
import { AdminComponent } from './layout/admin/admin.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { adminGuard } from './Guard/admin.guard';
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  {path:'',component:ClientComponent,children:[
    {path:'',component:HomeComponent},
    {path:'products',component:ProductListComponent},
    {path:'product/:id',component:ProductDetailComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
  ]},
  {path:'dashboard',component:AdminComponent,canActivate:[adminGuard],children:[
    {path:'students',component:StudentListComponent},
    {path:'students/edit/:id',component:StudentEditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
