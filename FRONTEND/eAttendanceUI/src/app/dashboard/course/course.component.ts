import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginServiceService } from '../../service/loginService/login-service.service';

@Component({
  selector: 'app-course',
  standalone:true,
  imports: [RouterLink,CommonModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {


  // crs:any=[];
  user:any;
  loginStatus: boolean = false;

  constructor(private router: Router,private logins:LoginServiceService){

  }

  ngOnInit(): void {
    debugger
    this.loginStatus = this.logins.getStatus();
    if(this.loginStatus == false){
      this.router.navigateByUrl("/login");
    }
  }

}
