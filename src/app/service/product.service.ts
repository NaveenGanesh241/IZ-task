import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,private spinner:NgxSpinnerService) { }

  showSpinner(){
    return this.spinner.show();
  }
  hideSpinner(){
    return this.spinner.hide();
  }

  addproduct(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/product', data);
  }
  showproduct(): Observable<any> {
    return this.http.get('http://localhost:3000/product');
  }
  deleteproduct(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/product/${id}`)
  }
  updateproduct(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/product/${id}`, data);
  }

}
