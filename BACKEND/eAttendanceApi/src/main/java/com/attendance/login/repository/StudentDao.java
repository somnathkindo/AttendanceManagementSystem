package com.attendance.login.repository;

import org.springframework.data.repository.CrudRepository;

import com.attendance.entity.login.Student;

public interface StudentDao extends CrudRepository<Student, Long>{

}
