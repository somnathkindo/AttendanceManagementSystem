import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {


  private baseUrl="http://localhost:3032/"
  constructor(private http:HttpClient) { }

  saveStudent(sdata:any):Observable<any>{
    return this.http.post(this.baseUrl+"saveStudent",sdata);
  }

  getStudents():Observable<any>{
    return this.http.get(this.baseUrl+"getAllStudent");
  }
}
