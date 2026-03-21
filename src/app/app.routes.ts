import { Routes } from '@angular/router';
import { Clientlayout } from './layout/clientlayout/clientlayout';
import { Adminlayout } from './layout/adminlayout/adminlayout';
import { Homepage } from './pages/homepage/homepage';
import { Category } from './pages/category/category';
import { Detail } from './pages/detail/detail';

export const routes: Routes = [
    {path:'',component:Clientlayout,children:[
        {path:'',component:Homepage},
        {path:'category',component:Category},
        {path:'detail',component:Detail}
    ]},
    {path:'admin',component:Adminlayout}
];
