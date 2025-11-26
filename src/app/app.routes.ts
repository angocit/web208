import { Routes } from '@angular/router';
import { Clientlayou } from './layouts/clientlayou/clientlayou';
import { Adminlayout } from './layouts/adminlayout/adminlayout';
import { Home } from './pages/home/home';
import { Detail } from './pages/detail/detail';
import { Addproduct } from './pages/admin/addproduct/addproduct';

export const routes: Routes = [
    {path:'',component:Clientlayou,children:[
        {path:'',component:Home},
        {path:'detail/:id',component:Detail},
    ]},
    {path:'admin',component:Adminlayout,children:[
        {path: 'product/add',component:Addproduct}
    ]}
];
