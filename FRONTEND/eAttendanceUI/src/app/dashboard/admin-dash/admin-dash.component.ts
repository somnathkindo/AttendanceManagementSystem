import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginServiceService } from '../../service/loginService/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dash',
  standalone:true,
  imports: [CommonModule,FormsModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './admin-dash.component.html',
  styleUrl: './admin-dash.component.css'
})
export class AdminDashComponent implements OnInit {
  loginStatus: any;
  constructor(private router: Router,private logins: LoginServiceService){

  }

  ngOnInit(): void {
    debugger
    this.loginStatus = this.logins.getStatus();
    if(this.loginStatus == false){
      this.router.navigateByUrl("/login");
    }
  }
}
