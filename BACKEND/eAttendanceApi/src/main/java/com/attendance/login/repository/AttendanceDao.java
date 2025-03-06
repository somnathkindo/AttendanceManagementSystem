package com.attendance.login.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.attendance.entity.login.Attendance;

public interface AttendanceDao extends CrudRepository<Attendance, Long>{

}
