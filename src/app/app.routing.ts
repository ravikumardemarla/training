import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const APP_ROUTING: Routes = [
  {
    path: '',
    loadChildren: './cache/cache.module#CacheModule'
  },
  {
    path: 'sequence',
    loadChildren: './sequence/sequence.module#SequenceModule'
  },
  {
    path: 'student',
    loadChildren: './student/student.module#StudentModule'
  },
  {
    path: 'httpclient',
    loadChildren: './httpclient/httpclient.module#HttpclientSampleModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(APP_ROUTING);
