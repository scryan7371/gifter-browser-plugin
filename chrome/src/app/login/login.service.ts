import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user/User';
import { TokenResponse } from './token-response';
import { map } from 'rxjs/operators';
import { ServerContentResponse } from '../util/server-content-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient){
  }

  productionUrl = 'https://ztjw6tdoqg.execute-api.us-east-1.amazonaws.com/prod/api/v1';

  login(emailAddress: string, password: string): Observable<User>{
    return this.http.post<ServerContentResponse<TokenResponse>>(`{this.productionUrl}/security/login`, {
      email_address: emailAddress,
      password
    })
      .pipe(map(serverResponse => {
        const user = serverResponse.content.user;
        // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        sessionStorage.setItem('authToken', serverResponse.content.token);
        return user;
      }));
  }
}
