import { Routes } from '@angular/router';
import { NotFoundModule } from './not-found/not-found.module';

const a = NotFoundModule;

export const appRoutingConfig: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'main',
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }
        ]
    },
    {
        path: '**',
        loadChildren: './not-found/not-found.module#NotFoundModule'
    }
];