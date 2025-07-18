import { Routes } from '@angular/router';
import { Home } from './component/client/home/home';
import { Detail } from './component/client/detail/detail';
import { Client } from './layouts/client/client';
import { Admin } from './layouts/admin/admin';
import { Dashboard } from './component/admin/dashboard/dashboard';

export const routes: Routes = [
    // {path:"",component:Home},
    //  {path:"detail",component:Detail}
    {path:"",component:Client,children:[
        {path:"",component:Home},
        {path:"detail",component:Detail}
    ]},
    {path:"admin",component:Admin,children:[
        {path:"dashboard",component:Dashboard}
    ]}
];
