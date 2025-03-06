import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginServiceService } from '../../../service/loginService/login-service.service';

@Component({
  selector: 'app-student-dash',
  standalone:true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './student-dash.component.html',
  styleUrl: './student-dash.component.css'
})
export class StudentDashComponent implements OnInit{

  constructor(private router: Router, private logins: LoginServiceService){}

  ngOnInit(): void {
     // private router: Router, private logins: LoginServiceService


     if (this.logins.getStatus() === false) {
      this.router.navigateByUrl("/login");
    }
  }

}
