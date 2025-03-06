package com.attendance.login.repository;

import org.springframework.data.repository.CrudRepository;

import com.attendance.entity.login.UserLog;

public interface UserLogDao extends CrudRepository<UserLog, Long>{

}
