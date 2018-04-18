import { Routes, RouterModule } from '@angular/router';
import { ImageComponent } from './image/image.component';

const UPLOAD_ROUTES: Routes = [
    {
        path: '',
        component: ImageComponent
    }
];

export const UPLOAD_ROUTINGS = RouterModule.forChild(UPLOAD_ROUTES);
