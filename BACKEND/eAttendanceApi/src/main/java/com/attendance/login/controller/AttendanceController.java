package com.attendance.login.controller;

import org.springframework.web.bind.annotation.RestController;

import com.attendance.entity.login.Attendance;
import com.attendance.login.service.AttendanceService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class AttendanceController {
	
	@Autowired
	AttendanceService attendanceService;

	@PostMapping("/saveAttendance")
	public List<Attendance> saveAttendance(@RequestBody List<Attendance> att) {	
	return attendanceService.saveAttendance(att);
	}
	
	@GetMapping("/getAtt")
	public List<Attendance> getAttenById(@RequestBody Long regdId){
		return attendanceService.getattendance(regdId);
	}
	
}
