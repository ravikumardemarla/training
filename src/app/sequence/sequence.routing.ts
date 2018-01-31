import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';

const SEQUENCE_ROUTING: Routes = [
  {
    path : '',
    component: UserComponent
  }
];

export const SEQUENCE_ROUTES = RouterModule.forChild(SEQUENCE_ROUTING);
