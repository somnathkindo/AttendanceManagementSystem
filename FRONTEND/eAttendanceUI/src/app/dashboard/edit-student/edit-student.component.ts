import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../service/loginService/login-service.service';

@Component({
  selector: 'app-edit-student',
  standalone:true,
  imports: [],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent implements OnInit{

  constructor(private router: Router, private logins: LoginServiceService){}

  ngOnInit(): void {
       // private router: Router, private logins: LoginServiceService


       if (this.logins.getStatus() === false) {
        this.router.navigateByUrl("/login");
      }
  }



}
