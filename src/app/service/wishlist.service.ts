import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }
  likeArray:any=[]
  
  updatelike(id:any): Observable<any>{
    const update={like:true}
   return this.http.patch(`http://localhost:3000/product/${id}`,update)
  }
  updatelike2(id:any):Observable<any>
  {
    const update={like:false}
    return this.http.patch(`http://localhost:3000/product/${id}`,update)
  }
}
