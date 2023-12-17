import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../competition-details-component/User';
import { UserModel } from './UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8082/api/v1/member";

  constructor(private http: HttpClient) { }

  AddUser(User: User): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`, User);
  }

  getAllUser(): Observable<{ message: string, result: UserModel[], errors: any, errorMap: any }> {
    return this.http.get<{ message: string, result: UserModel[], errors: any, errorMap: any }>(this.baseUrl);
  }
}
