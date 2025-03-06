package com.attendance.login.repository;

import org.springframework.data.repository.CrudRepository;

import com.attendance.entity.login.UserLogin;

public interface UserLoginDao extends CrudRepository<UserLogin, Long>{

}
