import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { DashboardServiceService } from '../../service/dashboardService/dashboard-service.service';
import { LoginServiceService } from '../../service/loginService/login-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  dash: any;
  loginStatus:any;
  constructor(private dashService: DashboardServiceService, private router: Router, private logins: LoginServiceService) { }

  ngOnInit(): void {
    debugger
    this.loginStatus = this.logins.getStatus();
    if(this.loginStatus == false){
      this.router.navigateByUrl("/login");
    }
  }

  userData: any = {
    mail: '',
    password: '',
    role: '',
    status: 0
  };

  ld: any = {
    name: '',
    mail: '',
    role: 0,
    status: true
  };

  checkLogin() {
    this.dashService.checkUser(this.userData).subscribe(
      (response) => {
        if (response.status === 1 || response.status === 2 || response.status === 3) {
          this.ld.name = response.name;
          this.ld.mail = this.userData.mail;
          this.ld.role = response.status;
          this.ld.status = true;  // Set the status to true when login is successful

          // Set the login status in the LoginService
          this.logins.setLoginStatus(this.ld);

          if (this.logins.getStatus() === true) {
            alert("Login Successful!");
            if (this.ld.role === 1) {
              this.router.navigate(["/adminDash"]);
            }
            else if(this.ld.role === 2){
              this.router.navigate(["/tdash"]);
            }
             else {
              this.router.navigate(["/sdash"]);
            }
          }
        } else {
          alert("Login Failed!");
        }
      },
      (error) => {
        alert("Login Failed!");
      }
    );
  }
}
