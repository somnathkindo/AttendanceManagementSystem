package com.attendance.login.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.attendance.entity.login.Student;
import com.attendance.login.repository.StudentDao;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	StudentDao studentDao;
	
	@Override
	public Student saveStudent(Student stu) {
		
		return studentDao.save(stu);
	}

	@Override
	public ArrayList<Student> getAllStudent() {
		
		return (ArrayList<Student>) studentDao.findAll();
	}


}
