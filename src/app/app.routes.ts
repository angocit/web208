import { Routes } from '@angular/router';
import { ProductaddComponent } from './components/product/productadd/productadd.component';
import { ProducteditComponent } from './components/product/productedit/productedit.component';

export const routes: Routes = [
    {path:"product-add",component:ProductaddComponent},
    {path:"product-edit/:id",component:ProducteditComponent},
];
