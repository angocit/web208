import { Routes } from '@angular/router';
import { Client } from './layout/client/client';
import { Admin } from './layout/admin/admin';
import { Home } from './pages/home/home';
import { Detail } from './pages/detail/detail';

export const routes: Routes = [
    {path:'',component:Client,children:[
        {path:'',component:Home},
        {path:'detail',component:Detail}
    ]},
    {path:'admin',component:Admin}
];
