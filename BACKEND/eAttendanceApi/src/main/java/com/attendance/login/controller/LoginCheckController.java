







package com.attendance.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.attendance.entity.login.LoginUser;
import com.attendance.login.service.LoginCheckService;

import jakarta.transaction.Transactional;

@CrossOrigin(origins = "http://localhost:4200")

@Transactional
@RestController
public class LoginCheckController {
	
	@Autowired
	LoginCheckService loginCheckService;
	
	  @PostMapping("/checkUser")
	  public LoginUser CheckUser(@RequestBody LoginUser loginUser) {
		  LoginUser user=loginCheckService.CheckUser(loginUser);
	        return user;
	    }

}
