package com.attendance.login.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.attendance.entity.login.Student;
import com.attendance.login.service.StudentService;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class StudentController {
	
	@Autowired
	StudentService studentService;
	
	@PostMapping("/saveStudent")
	public ResponseEntity<Student> saveStudent(@RequestBody Student stu)
	{
		Student studentData=studentService.saveStudent(stu);
		return new ResponseEntity<Student>(studentData,HttpStatus.CREATED);
	}
	
	@GetMapping("/getAllStudent")
	public  ArrayList<Student> getAllStudent(){
		return studentService.getAllStudent();
	}
	
}
