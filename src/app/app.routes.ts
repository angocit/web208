import { Routes } from '@angular/router';
import { Home } from './component/client/home/home';
import { Detail } from './component/client/detail/detail';
import { Client } from './layouts/client/client';
import { Admin } from './layouts/admin/admin';
import { Dashboard } from './component/admin/dashboard/dashboard';
import { adminGuard } from './guards/admin-guard';
import { Login } from './component/login/login';
import { Addproduct } from './component/admin/addproduct/addproduct';
import { Editproduct } from './component/admin/editproduct/editproduct';
import { Productlist } from './component/admin/productlist/productlist';

export const routes: Routes = [
    // {path:"",component:Home},
    //  {path:"detail",component:Detail}
    {path:"",component:Client,children:[
        {path:"",component:Home},
        {path:"detail/:id",component:Detail},
        {path:"login",component:Login}
    ]},
    {path:"admin",component:Admin,canActivate:[adminGuard],children:[
        {path:"",component:Dashboard},
        {path:"products",component:Productlist},
        {path:"addproduct",component:Addproduct},
        {path:"editproduct/:id",component:Editproduct}
    ]}
];
