import { Routes } from '@angular/router';
import { Clientlayout } from './layouts/clientlayout/clientlayout';
import { Adminlayout } from './layouts/adminlayout/adminlayout';
import { Home } from './pages/home/home';
import { Detailproduct } from './pages/detailproduct/detailproduct';
import { Search } from './pages/search/search';
import { Addproduct } from './pages/admin/addproduct/addproduct';

export const routes: Routes = [
    {path:'',component:Clientlayout,children:[
        {path:'',component:Home},
        {path:'detail/:id',component:Detailproduct},
        {path:'search',component:Search}
    ]},
    {path:'admin',component:Adminlayout,children:[
        {path:'products/add',component:Addproduct}
    ]}
];
