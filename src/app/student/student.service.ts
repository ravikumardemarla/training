import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudentModel } from '../model/student.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentService {
    constructor(private http: HttpClient) { }

    public getStudents(): Observable<IStudentModel[]> {
        return this.http.get<IStudentModel[]>(`${environment.STUDENT_INFO}`);
    }
}
