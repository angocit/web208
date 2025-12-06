import { Routes } from '@angular/router';
import { Clientlayout } from './layouts/clientlayout/clientlayout';
import { Adminlayout } from './layouts/adminlayout/adminlayout';
import { Home } from './pages/home/home';
import { Detailproduct } from './pages/detailproduct/detailproduct';
import { Search } from './pages/search/search';
import { Addproduct } from './pages/admin/addproduct/addproduct';
import { Productlist } from './pages/admin/productlist/productlist';
import { Editproduct } from './pages/admin/editproduct/editproduct';
import { Login } from './pages/login/login';
import { adminGuard } from './guard/admin-guard';
import { Register } from './pages/register/register';

export const routes: Routes = [
    {path:'',component:Clientlayout,children:[
        {path:'',component:Home},
        {path:'detail/:id',component:Detailproduct},
        {path:'search',component:Search},
         {path:'login',component:Login},
         {path:'register',component:Register}
    ]},
    {path:'admin',canActivate:[adminGuard], component:Adminlayout,children:[
        {path:'products/add',component:Addproduct},
        {path:'products',component:Productlist},
        {path:'products/edit/:id',component:Editproduct}
    ]}
];
