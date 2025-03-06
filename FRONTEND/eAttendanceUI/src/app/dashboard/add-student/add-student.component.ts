import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentServiceService } from '../../service/student_service/student-service.service';
import { response } from 'express';
import { Route, Router } from '@angular/router';
import { LoginServiceService } from '../../service/loginService/login-service.service';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent implements OnInit {

  studentForm: FormGroup;

  constructor(private fb: FormBuilder, private student: StudentServiceService, private router: Router, private logins: LoginServiceService) {
    this.studentForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      course: ['', [Validators.required]],
      batch: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    });
  }

 // private router: Router, private logins: LoginServiceService

  ngOnInit(): void {
    if(this.logins.getStatus() === false)
      {
    this.router.navigateByUrl("/login");
  }
  }

  onSubmit() {
    if (this.studentForm.valid) {
      console.log('Student Data:', this.studentForm.value);
      this.student.saveStudent(this.studentForm.value).subscribe(
        response => {
          alert("data Sucessfully saved!");
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }



}


