import {RouterModule, Routes} from '@angular/router';
import {RenderComponent} from './render/render.component';

const CACHE_ROUTING: Routes = [
  {
    path: '',
    component: RenderComponent
  }
];

export const CACHE_ROUTES = RouterModule.forChild(CACHE_ROUTING);
