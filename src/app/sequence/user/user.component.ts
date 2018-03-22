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
  public messages = [];

  constructor(private userService: UserService) {
  }

  public ngOnInit(): void {
    this.serviceSubscriber$ = this.userService.getMessages().subscribe(message => {
      const updateMessage = this.getImagePath(message);
      this.messages.push(updateMessage);
      console.log('Messages getting frm Server :::    ', message);
    });
  }

  public getImagePath(m): any {
    const baseUrl = 'http://192.168.2.229:1600/';
    const message = m;
    message.Detected_Image_Path = baseUrl + m.Detected_Image_Path.replace('BaseDirectory', 'intelli-vision');
    message.Enrolled_Image_Path = baseUrl + m.Enrolled_Image_Path.replace('BaseDirectory', 'intelli-vision');
    if (m.Person_Name !== 'unknownFN') {
      message.Person_Name = m.Person_Name.split(' ')[1];
    } else {
      message.Person_Name = 'Unknow Person';
    }
    return message;
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
