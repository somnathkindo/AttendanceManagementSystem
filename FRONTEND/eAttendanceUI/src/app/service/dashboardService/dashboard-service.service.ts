import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  private baseUrl="http://localhost:3032/";
  constructor(private httpclient:HttpClient) { }

  checkUser(user:any):Observable<any>{
    return this.httpclient.post(this.baseUrl+"checkUser",user);
  }
}
