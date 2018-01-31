import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Observable} from 'rxjs/Observable';

export function cacheable<T>(o: Observable<T>): Observable<T> {
  const replay = new ReplaySubject<T>(1);
  o.subscribe(
    x => replay.next(x),
    x => replay.error(x),
    () => replay.complete()
  );
  return replay.asObservable();
}

const cacheableCache: { [key: string]: Observable<any> } = {};

export function advCache<T>(returnObservable: Observable<T>, key?: string, customCache?: { [key: string]: Observable<T> }): Observable<T> {
  if (key && (customCache || cacheableCache)[key]) {
    return (customCache || cacheableCache)[key] as Observable<T>;
  }
  const replay = new ReplaySubject<T>(1);
  returnObservable.subscribe(
    x => replay.next(x),
    x => replay.error(x),
    () => replay.complete()
  );
  const observable = replay.asObservable();
  if (key) {
    if (customCache) {
      customCache[key] = observable;
    } else {
      cacheableCache[key] = observable;
    }
  }
  return observable;
}
