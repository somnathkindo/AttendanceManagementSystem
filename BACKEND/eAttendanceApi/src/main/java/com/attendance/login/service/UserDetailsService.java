package com.attendance.login.service;

import org.springframework.stereotype.Service;

import com.attendance.entity.login.UserDetails;

@Service
public interface UserDetailsService {

	UserDetails saveUserDetails(UserDetails userDetails);

}
