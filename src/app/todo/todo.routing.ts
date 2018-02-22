import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';

const TODO_ROUTING: Routes = [
    {
        path: '',
        component: TodoComponent
    }
];

export const TODO_ROUTES = RouterModule.forChild(TODO_ROUTING);
