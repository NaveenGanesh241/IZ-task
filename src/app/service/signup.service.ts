import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  adduser(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/signup', data);
  }
  showusers(): Observable<any> {
    return this.http.get('http://localhost:3000/signup');
  }
}
