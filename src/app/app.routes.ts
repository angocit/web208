import { Routes } from '@angular/router';
import { Clientlayou } from './layouts/clientlayou/clientlayou';
import { Adminlayout } from './layouts/adminlayout/adminlayout';
import { Home } from './pages/home/home';
import { Detail } from './pages/detail/detail';
import { Addproduct } from './pages/admin/addproduct/addproduct';
import { Listproduct } from './pages/admin/listproduct/listproduct';
import { Editproduct } from './pages/admin/editproduct/editproduct';
import { Login } from './pages/login/login';
import { adminGuard } from './guards/admin-guard';

export const routes: Routes = [
    {path:'',component:Clientlayou,children:[
        {path:'',component:Home},
        {path:'detail/:id',component:Detail},
        {path:'login',component:Login}
    ]},
    {path:'admin',canActivate:[adminGuard],component:Adminlayout,children:[
        {path: 'product/add',component:Addproduct},
        {path: 'products',component:Listproduct},
        {path: 'products/edit/:id',component:Editproduct}
    ]}
];
