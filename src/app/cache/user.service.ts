import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {advCache, cacheable} from '../utils/cache-util';

@Injectable()
export class UserService {
  public _cache: Observable<any>;

  constructor(private http: HttpClient) {
    // this.modelStream = this.getAllUsers().publishReplay().refCount();
  }


  public getAllUsers() {
    if (this._cache) {
      return this._cache;
    }
    return this._cache = cacheable<any>(this.http.get(`${environment.API_URL}`));
  }

  public getAllCacheUsers() {
    return advCache<any>(this.http.get(`${environment.API_URL}`), 'user');
  }
  public getAllCacheUsers2() {
    return advCache<any>(this.http.get(`${environment.API_URL}`), 'user2');
  }
}
