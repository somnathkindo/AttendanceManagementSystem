package com.attendance.login.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.attendance.entity.login.UserInfo;
import com.attendance.entity.login.UserLogin;
import com.attendance.login.repository.UserLoginDao;

@Service
public class UserLoginServiceImpl implements UserLoginService{

	@Autowired
	UserLoginDao userLoginDao;
	
	@Override
	public UserLogin saveUserLogin(UserLogin userLogin) {
		UserInfo data=new UserInfo();
		data.setCreatedDate(LocalDateTime.now());
		data.setModifiedDate(LocalDateTime.now());
		data.setCreatedUser("Admin");
		data.setModifiedUser(userLogin.getUserId()+"");
		userLogin.setUserInfo(data);
		return userLoginDao.save(userLogin);
	}

}
