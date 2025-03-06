package com.attendance.login.service;

import org.springframework.stereotype.Service;

import com.attendance.entity.login.UserLogin;

@Service
public interface UserLoginService {

	UserLogin saveUserLogin(UserLogin userLogin);

}
