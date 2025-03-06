package com.attendance.login.service;

import org.springframework.stereotype.Service;

import com.attendance.entity.login.UserLog;

@Service
public interface UserLogService {

	UserLog saveUserLog(UserLog userLog);

}
