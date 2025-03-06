package com.attendance.login.repository;

import org.springframework.data.repository.CrudRepository;

import com.attendance.entity.login.Course;

public interface CourseDao extends CrudRepository<Course, Integer>{

}
