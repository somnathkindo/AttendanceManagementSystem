package com.attendance.login.repository;

import org.springframework.data.repository.CrudRepository;

import com.attendance.entity.login.UserDetails;

public interface UserDetailsDao extends CrudRepository<UserDetails, Long>{

}
