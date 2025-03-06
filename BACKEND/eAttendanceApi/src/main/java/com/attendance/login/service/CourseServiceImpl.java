package com.attendance.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.attendance.entity.login.Course;
import com.attendance.login.repository.CourseDao;

@Service
public class CourseServiceImpl implements CourseService{
	
	@Autowired
	CourseDao dao;

	@Override
	public Course saveCourse(Course course) {
		return dao.save(course);
	}

}
