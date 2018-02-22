import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/observable';
import { TodoModel } from '../model/todo.model';
import { environment } from '../../environments/environment';

@Injectable()
export class TodoService {
    constructor(private http: HttpClient) { }

    public getTodoList(): Observable<TodoModel[]> {
        return this.http.get<TodoModel[]>(`${environment.TODO_URL}`);
    }
}
