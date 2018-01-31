import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SEQUENCE_ROUTES} from './sequence.routing';
import {UserComponent} from './user/user.component';
import {UserService} from './user.service';

@NgModule({
  imports: [
    CommonModule,
    SEQUENCE_ROUTES
  ],
  declarations: [UserComponent],
  providers: [UserService]
})
export class SequenceModule { }
