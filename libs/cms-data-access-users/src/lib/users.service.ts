import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '@nx-example/shared-type-user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('/api/users');
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`/api/users/${id}`);
  }
}
