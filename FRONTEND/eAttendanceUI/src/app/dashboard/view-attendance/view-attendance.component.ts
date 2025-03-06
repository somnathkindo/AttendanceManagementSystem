import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { response } from 'express';
import { StudentServiceService } from '../../service/student_service/student-service.service';
import { AttendaneServiceService } from '../../service/attendane-service.service';
import { Attendance } from '../../model/attendance/attendance.model';

@Component({
  selector: 'app-view-attendance',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './view-attendance.component.html',
  styleUrl: './view-attendance.component.css'
})
export class ViewAttendanceComponent {
  courses: string[] = ['Course 1', 'Course 2', 'Course 3'];
  batches: string[] = ['Batch A', 'Batch B', 'Batch C'];

  attendanceList: Attendance[] = [];

    students: any[] = [];

    constructor(private studentService: StudentServiceService, private attendance:AttendaneServiceService) {}

    getAtt() {
      this.studentService.getStudents().subscribe(
        (response) => {
          this.students = response;
        },
        (error) => {
          console.error('Error fetching students:', error);
        }
      );
    }
}
