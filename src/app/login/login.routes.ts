import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const ROUTING: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'user',
        component: UserComponent
    }
];

export const LOGIN_ROUTES = RouterModule.forChild(ROUTING);
