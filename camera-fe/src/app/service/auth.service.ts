import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, ReplaySubject, Subject, tap} from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  private logged =  new ReplaySubject<boolean>(1);
  isLogged = this.logged.asObservable()

  login(username: string, password: string): Observable<any> {

    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions).pipe(
      tap( rez => {
        debugger
        this.logged.next(true)
      })
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }
}
