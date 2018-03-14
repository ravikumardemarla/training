import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import { environment } from '../../environments/environment';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import * as io from 'socket.io-client';

@Injectable()
export class UserService {
  private intervalObservable: Observable<any>;
  private socket;

  public sendMessage() {
    this.socket.emit('add-message');
  }

  constructor(private httpClient: HttpClient) {
  }

  public getSequenceCalls(): Observable<any> {
    this.intervalObservable = IntervalObservable.create(1000).flatMap(() =>
      this.httpClient.get(`${environment.FR_URL}`));

    return this.intervalObservable;
  }

  getMessages() {
    const observable = new Observable(observer => {
      this.socket = io(`${environment.FR_URL}`);
      this.socket.on('user-data', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
}
