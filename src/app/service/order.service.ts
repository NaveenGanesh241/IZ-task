import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  placeOrder(data: any): Observable<any> {
    return this.http.post('http://localhost:4000/orders/placeOrder', data);
  }
}
