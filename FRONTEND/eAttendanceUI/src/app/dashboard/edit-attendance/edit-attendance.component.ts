import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { StudentServiceService } from '../../service/student_service/student-service.service';
import { CommonModule } from '@angular/common';
import { response } from 'express';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../service/loginService/login-service.service';

@Component({
  selector: 'app-edit-attendance',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-attendance.component.html',
  styleUrl: './edit-attendance.component.css'
})
export class EditAttendanceComponent {

  constructor(private stu: StudentServiceService, private router: Router, private logins: LoginServiceService) { }
  students: any = [];
  ngOnInit(): void {
    this.stu.getStudents().subscribe(
      response => {
        this.students = response;
      }
    );

    // private router: Router, private logins: LoginServiceService


    if (this.logins.getStatus() === false) {
      this.router.navigateByUrl("/login");
    }
  }


}
