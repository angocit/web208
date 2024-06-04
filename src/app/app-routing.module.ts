import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { ProductaddComponent } from './components/productadd/productadd.component';
import { ProducteditComponent } from './component/productedit/productedit.component';
import { adminGuard } from './Guard/admin.guard';

const routes: Routes = [
  {path:'products',component:ProductsComponent,canActivate:[adminGuard]},
  {path:'product/add',component:ProductaddComponent},
  {path:'product/edit/:id',component:ProducteditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
