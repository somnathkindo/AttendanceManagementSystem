import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private http:HttpClient) { }

  private baseUrl="http://localhost:3032/"

  saveCcourse(course:any){
    return this.http.post(this.baseUrl+"saveCoourse",course);
  }
}
