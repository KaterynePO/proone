import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './User';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];

  userUrl = 'api/users'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  log: any;
  _id: any;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  getUserNo404<Data>(_id: any): Observable<User> {
    const url = `${this.userUrl}/?_id=${this._id}`;
    return this.http.get<User[]>(url).pipe(map((users) => users[0]));
  }

  getUser(_id: number): Observable<User> {
    const url = `${this.userUrl}/${this._id}`;
    return this.http.get<User>(url).pipe(tap((_) => this.log(this._id)));
  }
}
