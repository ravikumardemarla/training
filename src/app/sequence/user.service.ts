import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import {environment} from '../../environments/environment';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';

@Injectable()
export class UserService {
  private intervalObservable: Observable<any>;

  constructor(private httpClient: HttpClient) {
  }

  public getSequenceCalls(): Observable<any> {
    this.intervalObservable =  IntervalObservable.create(1000).flatMap(() =>
      this.httpClient.get(`${environment.API_URL}`));

    return this.intervalObservable;
  }
}
