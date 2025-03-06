package com.attendance.login.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.attendance.entity.login.Attendance;
import com.attendance.login.repository.AttendanceDao;

@Service
public class AttendanceServiceImpl implements AttendanceService{

	@Autowired
	AttendanceDao dao;
	
	
	@Override
	public List<Attendance> saveAttendance(List<Attendance> att) {
		
		dao.saveAll(att);
		return (List<Attendance>) dao.findAll();
	}

	@Override
	public List<Attendance> getattendance(Long regdId) {
		List<Attendance> att=(List<Attendance>) dao.findAllById(null);
		return att;
	}

}
