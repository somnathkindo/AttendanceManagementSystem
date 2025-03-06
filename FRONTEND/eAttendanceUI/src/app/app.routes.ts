import { EditStudentComponent } from './dashboard/edit-student/edit-student.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { RegistrationComponent } from './home/registration/registration.component';
import { AdminDashComponent } from './dashboard/admin-dash/admin-dash.component';
import { TestComponent } from './test/test.component';
import { ForgotPasswordComponent } from './home/forgot-password/forgot-password.component';
import { AddStudentComponent } from './dashboard/add-student/add-student.component';
import { TakeAttendanceComponent } from './dashboard/take-attendance/take-attendance.component';
import { ViewAttendanceComponent } from './dashboard/view-attendance/view-attendance.component';
import { EditAttendanceComponent } from './dashboard/edit-attendance/edit-attendance.component';
import { CourseComponent } from './dashboard/course/course.component';
import { StudentDashComponent } from './dashboard/student-dash/student-dash/student-dash.component';
import { TdashComponent } from './dashboard/tdash/tdash.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'sdash', component: StudentDashComponent, children: [
      { path: 'viewsattendance', component: ViewAttendanceComponent }
    ]
  },
  {
    path: 'adminDash', component: AdminDashComponent, children: [
      { path: 'takeattendance', component: TakeAttendanceComponent },
      { path: 'addstudent', component: AddStudentComponent },
      { path: 'viewsattendance', component: ViewAttendanceComponent },
      { path: "edit", component: EditStudentComponent },
      { path: "ea", component: EditAttendanceComponent },
      {path:"course",component:CourseComponent}
    ]
  },
  {
    path: 'tdash', component: TdashComponent, children: [
      { path: 'takeattendance', component: TakeAttendanceComponent },
      { path: 'addstudent', component: AddStudentComponent },
      { path: 'viewsattendance', component: ViewAttendanceComponent },
      { path: "edit", component: EditStudentComponent },
      { path: "ea", component: EditAttendanceComponent },
    ]
  },
  { path: 'course', component: CourseComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: '', component: LoginComponent },
  { path: 'tdash', component: TdashComponent },
  { path: 'adminDash', component: AdminDashComponent },
  { path: 'test', component: TestComponent },


  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'viewsattendance', component: ViewAttendanceComponent }

];
