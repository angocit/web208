import { Routes } from '@angular/router';
import { Clientlayout } from './layouts/clientlayout/clientlayout';
import { Adminlayout } from './layouts/adminlayout/adminlayout';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { Studentlist } from './pages/studentlist/studentlist';
import { Studentadd } from './pages/studentadd/studentadd';
import { Studentedit } from './pages/studentedit/studentedit';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';

export const routes: Routes = [
    {path:'',component:Clientlayout,children:[
        {path:'',component:Home},
        {path:'register',component:Register},
        {path:'login',component:Login}
    ]},
    {path:'admin', component:Adminlayout,children:[
        {path:'',component:Dashboard},
        {path:'students',component:Studentlist},
        {path:'students/add',component:Studentadd},
        {path:'students/edit/:id',component:Studentedit},        
    ]}
];
