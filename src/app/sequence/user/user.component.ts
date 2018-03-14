import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  private serviceSubscriber$: Subscription;

  public userData = [];
  private messages = [];

  constructor(private userService: UserService) {
  }

  public ngOnInit(): void {
    this.serviceSubscriber$ = this.userService.getMessages().subscribe(message => {
      this.messages.push(message);
      console.log('Messages getting frm Server :::    ', message);
    });
  }

  public ngOnDestroy(): void {
    if (this.serviceSubscriber$) {
      this.serviceSubscriber$.unsubscribe();
    }
  }

  public fetchData(): void {
    this.serviceSubscriber$ = this.userService.getSequenceCalls().subscribe((data) => {
      const userObj: any = {};
      for (const obj of data) {
        userObj.fullName = obj.fullName;
        userObj.id = obj.id;
        userObj.project = obj.project;
        // this.userData.push(userObj);
      }
      this.userData.push(userObj);
    });
  }

  public stopSequenceCalls(): void {
    this.serviceSubscriber$.unsubscribe();
  }

  public clearData(): void {
    this.userData.length = 0;
  }

  public creatmessages(): void {
    this.userService.sendMessage();
  }

  public stopSendingMessages(): void {
    this.serviceSubscriber$.unsubscribe();
  }

  public clearMessages(): void {
    this.messages.length = 0;
  }
}
