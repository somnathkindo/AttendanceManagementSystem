package com.attendance.login.service;

import org.springframework.stereotype.Service;

import com.attendance.entity.login.Course;

@Service
public interface CourseService {

	Course saveCourse(Course course);

}
