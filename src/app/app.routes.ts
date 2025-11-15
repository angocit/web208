import { Routes } from '@angular/router';
import { Clientlayout } from './layouts/clientlayout/clientlayout';
import { Adminlayout } from './layouts/adminlayout/adminlayout';
import { Home } from './pages/home/home';
import { Detailproduct } from './pages/detailproduct/detailproduct';

export const routes: Routes = [
    {path:'',component:Clientlayout,children:[
        {path:'',component:Home},
        {path:'detail',component:Detailproduct}
    ]},
    {path:'admin',component:Adminlayout}
];
