import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-show-users',
  template: `
    <div *ngFor="let user of userData">
      <p>{{user.id}} {{user.fullName}}</p>
      <p>{{user.project}}</p>
    </div>`
})

export class ShowUsersComponent implements OnInit, OnDestroy {
  public userServiceSubscription$: Subscription;
  public userData = [];

  constructor(private userService: UserService) {
  }

  public ngOnInit() {
    this.getUserDetails();
  }

  public ngOnDestroy(): void {
    if (this.userServiceSubscription$) {
      this.userServiceSubscription$.unsubscribe();
    }
  }

  private getUserDetails(): void {
    this.userService.getAllCacheUsers().subscribe((data) => {
      this.userData = data;
      // console.log(' show all compo ', this.userData);
    });
  }
}
