package com.attendance.login.service;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.attendance.entity.login.Student;

@Service
public interface StudentService {

	Student saveStudent(Student stu);

	ArrayList<Student> getAllStudent();

}
