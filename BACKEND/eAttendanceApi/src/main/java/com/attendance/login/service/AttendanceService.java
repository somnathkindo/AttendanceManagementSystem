package com.attendance.login.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.attendance.entity.login.Attendance;

@Service
public interface AttendanceService {

	List<Attendance> saveAttendance(List<Attendance> att);

	List<Attendance> getattendance(Long regdId);


}
