import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../../service/student_service/student-service.service';
import { CommonModule } from '@angular/common';
import { Attendance } from '../../model/attendance/attendance.model';
import { FormsModule } from '@angular/forms';
import { AttendaneServiceService } from '../../service/attendane-service.service';
import { response } from 'express';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../service/loginService/login-service.service';

@Component({
  selector: 'app-take-attendance',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './take-attendance.component.html',
  styleUrls: ['./take-attendance.component.css']
})
export class TakeAttendanceComponent implements OnInit {

  attendanceList: Attendance[] = [];
  batch: any;
  date: Date = new Date();
  course: any;
  dis:any=false;

  students: any[] = [];

  constructor(private studentService: StudentServiceService, private attendance:AttendaneServiceService,private router: Router, private logins: LoginServiceService) {}


  ngOnInit(): void {


       // private router: Router, private logins: LoginServiceService


       if (this.logins.getStatus() === false) {
        this.router.navigateByUrl("/login");
      }
  }

  getatt(){
    this.studentService.getStudents().subscribe(
      (response) => {
        this.students = response;
        this.initializeAttendanceList();
        this.dis=true;
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }

  private initializeAttendanceList(): void {
    this.attendanceList = this.students.map(student => ({
      regdId: student.regdId,
      rollNo: student.userId,
      name: `${student.firstName} ${student.lastName}`,
      course: student.course,
      batch: student.batch,
      dt: this.date,
      attendance: false
    }));

    if (this.attendanceList.length > 0) {
      this.batch = this.attendanceList[0].batch;
      this.course = this.attendanceList[0].course;
      this.date= this.attendanceList[0].dt;
    }
  }

  saveAtten(data:any){
    this.attendance.saveAtten(this.attendanceList).subscribe(
      response=>{
        alert("attendance sucessfully saved!");
        console.log(response);
      }
    );
  }
}
