import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendaneServiceService {

  private baseUrl="http://localhost:3032/";
  constructor(private httpClient:HttpClient) { }

  saveAtten(data:any):Observable<any>{
    return this.httpClient.post(this.baseUrl+"saveAttendance",data);
  }

  saveResg(userReg:any):Observable<any>{
    return this.httpClient.post(this.baseUrl+"userregistration",userReg);
  }

}
