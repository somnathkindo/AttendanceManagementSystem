package com.attendance.login.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.attendance.entity.login.UserDetails;
import com.attendance.entity.login.UserInfo;
import com.attendance.login.repository.UserDetailsDao;

@Service
public class UserDetailsServiceImpl  implements UserDetailsService{
	@Autowired
	UserDetailsDao userDetailsDao;

	@Override
	public UserDetails saveUserDetails(UserDetails userDetails) {
		UserInfo data=new UserInfo();
		data.setCreatedDate(LocalDateTime.now());
		data.setModifiedDate(LocalDateTime.now());
		data.setCreatedUser("Admin");
		data.setModifiedUser(userDetails.getUserId()+"");
		userDetails.setUserInfo(data);
		return userDetailsDao.save(userDetails);
	}

}
