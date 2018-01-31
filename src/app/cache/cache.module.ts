import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CACHE_ROUTES} from './cache.routing';
import {RenderComponent} from './render/render.component';
import {UserComponent} from './user/user.component';
import {ShowUsersComponent} from './show/show-users.component';
import {UserService} from './user.service';

@NgModule({
  imports: [
    CommonModule,
    CACHE_ROUTES
  ],
  declarations: [RenderComponent, UserComponent, ShowUsersComponent],
  providers: [UserService]
})
export class CacheModule { }
