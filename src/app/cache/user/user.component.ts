import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  template: `
    <div *ngFor="let user of userData">
      <p>{{user.id}} {{user.fullName}}</p>
      <p>{{user.project}}</p>
    </div>`
})

export class UserComponent implements OnInit, OnDestroy {
  private userDataSubscription$: Subscription;
  public userData = [];

  constructor(private userService: UserService) {
  }

  public ngOnInit() {
    this.getUserDetails();
  }

  private getUserDetails(): void {
    this.userDataSubscription$ = this.userService.getAllCacheUsers().subscribe((data) => {
      this.userData = data;
    });
  }

  public ngOnDestroy(): void {
    if (this.userDataSubscription$) {
      this.userDataSubscription$.unsubscribe();
    }
  }
}
