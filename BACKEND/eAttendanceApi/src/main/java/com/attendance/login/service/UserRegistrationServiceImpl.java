package com.attendance.login.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.attendance.entity.login.UserInfo;
import com.attendance.entity.login.UserRegistration;
import com.attendance.login.repository.UserRegistrationDao;

@Service
public class UserRegistrationServiceImpl implements UserRegistrationService {

	@Autowired
	UserRegistrationDao userRegistrationDao;
	
	
	
	@Override
	public UserRegistration saveUserRegistration(UserRegistration userRegistration) {
		UserInfo data=new UserInfo();
		data.setCreatedDate(LocalDateTime.now());
		data.setModifiedDate(LocalDateTime.now());
		data.setCreatedUser("Admin");
		userRegistration.setUserId(userRegistration.getFirstName()+userRegistration.getRegdId());
		data.setModifiedUser(userRegistration.getRegdId()+"");
		userRegistration.setUserInfo(data);
		return userRegistrationDao.save(userRegistration);
	}

}
