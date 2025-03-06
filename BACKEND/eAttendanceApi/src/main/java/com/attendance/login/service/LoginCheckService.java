package com.attendance.login.service;

import org.springframework.stereotype.Service;

import com.attendance.entity.login.LoginUser;
import com.attendance.entity.login.UserLogin;

@Service
public interface LoginCheckService {

	LoginUser CheckUser(LoginUser loginUser);

}
