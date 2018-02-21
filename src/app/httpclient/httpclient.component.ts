import { Component, OnInit } from '@angular/core';
import { DataResponse } from '../model/data.model';
import { HttpClientService } from './httpclient.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent implements OnInit {

  public userData: Array<DataResponse> = [];
  constructor(private httpService: HttpClientService) { }

  ngOnInit() {
    this.callUserDataService();
    this.getUserIdData();
    this.addUserData();
  }

  private callUserDataService(): void {
    this.httpService.getUserData().subscribe((resp) => {
      this.userData = resp;
      console.log('this.userdata is :::  ', this.userData);
    });
  }

  private getUserIdData(): void {
    this.httpService.getUserIdData(1).subscribe((resp) => {
      console.log(' user id 1 data is :: ', resp);
    },
      (err: HttpErrorResponse) => {
        console.log('Error getting is:: ', err);
      });
  }

  private addUserData(): void {
    const userData = {} as DataResponse;
    userData.id = '101';
    userData.title = 'sample data added';
    userData.userId = '1122';
    this.httpService.addPostData(userData).subscribe((resp) => {
      console.log('Post Data added ::: ', resp);
    });
  }
}
