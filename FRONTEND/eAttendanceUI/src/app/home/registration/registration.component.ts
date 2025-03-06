import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { response } from 'express';
import { AttendaneServiceService } from '../../service/attendane-service.service';
import { error } from 'node:console';
import { Route, Router, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-registration',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule,RouterLink],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  constructor(private attenService:AttendaneServiceService,private router:Router) { }

  regData = {
    regdId: null,
    userId: '',
    firstName: '',
    lastName: '',
    mail: '',
    mobile: '',
    dob: '',
    gender: '',
    role:'',
    password: ''
  };

  clearForm() {
    this.regData.firstName = '';
    this.regData.lastName = '';
    this.regData.mail = '';
    this.regData.mobile = '';
    this.regData.dob = '';
    this.regData.gender = '';
    this.regData.role = '';
    this.regData.password = '';
  }

  saveReg() {
    this.attenService.saveResg(this.regData).subscribe(
      response => {
        alert("Data Successfully Saved!");
        this.clearForm();
        this.router.navigate(["/login"]);
      },
      error => {
        console.error("Error saving registration:", error);
        alert("Failed to save data!");
      }
    );
  }
}
