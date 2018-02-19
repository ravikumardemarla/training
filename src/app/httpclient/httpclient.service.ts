import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { DataResponse } from "../model/data.model";
import { environment } from "../../environments/environment";

@Injectable()
export class HttpClientService {
    constructor(private http: HttpClient) { }

    public getUserData(): Observable<DataResponse[]> {
        return this.http.get<DataResponse[]>(`${environment.JSON_SERVER}`);
    }

    public getUserIdData(id): Observable<DataResponse> {
        return this.http.get<DataResponse>(`${environment.JSON_SERVER}/${id}`);
    }

    public addPostData(data: DataResponse): Observable<DataResponse> {
        return this.http.post<DataResponse>(`${environment.JSON_SERVER}`, data)
    }
}