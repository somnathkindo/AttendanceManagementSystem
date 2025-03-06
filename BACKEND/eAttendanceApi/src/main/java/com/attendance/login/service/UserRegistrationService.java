package com.attendance.login.service;

import org.springframework.stereotype.Service;

import com.attendance.entity.login.UserRegistration;

@Service
public interface UserRegistrationService {

	UserRegistration saveUserRegistration(UserRegistration userRegistration);

}
