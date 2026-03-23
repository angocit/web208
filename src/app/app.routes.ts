import { Routes } from '@angular/router';
import { Client } from './layout/client/client';
import { Admin } from './layout/admin/admin';
import { Home } from './pages/home/home';
import { Detail } from './pages/detail/detail';
import { Productlist } from './pages/admin/productlist/productlist';
import { Productadd } from './pages/admin/productadd/productadd';
import { Productedit } from './pages/admin/productedit/productedit';

export const routes: Routes = [
    {path:'',component:Client,children:[
        {path:'',component:Home},
        {path:'detail',component:Detail}
    ]},
    {path:'admin',component:Admin, children:[
        {path:'products',component:Productlist},
        {path:'products/add',component:Productadd},
        {path:'products/edit/:id',component:Productedit}
    ]}
];
