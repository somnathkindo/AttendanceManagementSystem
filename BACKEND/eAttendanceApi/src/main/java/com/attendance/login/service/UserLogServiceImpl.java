package com.attendance.login.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.attendance.entity.login.UserInfo;
import com.attendance.entity.login.UserLog;
import com.attendance.login.repository.UserLogDao;

@Service
public class UserLogServiceImpl implements UserLogService{

	@Autowired
	UserLogDao userLogDao;
	
	@Override
	public UserLog saveUserLog(UserLog userLog) {
		UserInfo data=new UserInfo();
		data.setCreatedDate(LocalDateTime.now());
		data.setModifiedDate(LocalDateTime.now());
		data.setCreatedUser("Admin");
		data.setModifiedUser(userLog.getUserId());
		userLog.setUserInfo(data);
		return userLogDao.save(userLog);
	}

}
