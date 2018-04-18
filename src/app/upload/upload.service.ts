import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User, EmailInfo } from '../model/data.model';
import { environment } from '../../environments/environment';

export class UploadService {
    constructor(private http: HttpClient) {
        
    }

    public saveUser(user: User): Observable<any> {
        return this.http.post<any>(`${environment.FR_USER_REG}/add-user`, user);
    }

    public sendMailToReg(details: EmailInfo): Observable<any> {
        return this.http.post<any>(`${environment.FR_USER_REG}/send-mail-self-reg`, details);
    }
}
