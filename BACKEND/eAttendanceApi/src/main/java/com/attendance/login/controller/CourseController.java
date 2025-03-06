package com.attendance.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.attendance.entity.login.Course;
import com.attendance.login.service.CourseService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class CourseController {
	
	@Autowired
	CourseService courseService;
	
	@PostMapping("/saveCourse")
	public Course saveCourse(@RequestBody Course course) {
		
		return courseService.saveCourse(course);
	}
	

}
