export class Attendance {
  regdId: number; // Corresponds to Long in Java
  rollNo: number; // Corresponds to Integer in Java
  name: string;
  course: string;
  batch: string;
  dt: Date; // Corresponds to Date in Java
  attendance: boolean; // Corresponds to Boolean in Java

  constructor(
    regdId: number,
    rollNo: number,
    name: string,
    course: string,
    batch: string,
    dt: Date,
    attendance: boolean
  ) {
    this.regdId = regdId;
    this.rollNo = rollNo;
    this.name = name;
    this.course = course;
    this.batch = batch;
    this.dt = dt;
    this.attendance = attendance;
  }
}
