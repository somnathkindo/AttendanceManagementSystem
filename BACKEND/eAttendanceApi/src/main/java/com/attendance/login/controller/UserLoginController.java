package com.attendance.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.attendance.entity.login.UserLogin;
import com.attendance.login.service.UserLoginService;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class UserLoginController {

	@Autowired
    private UserLoginService userLoginService;

    @PostMapping("/userlogin")
    public ResponseEntity<UserLogin> createUserLogin(@RequestBody UserLogin userLogin) {
        UserLogin savedUserLogin = userLoginService.saveUserLogin(userLogin);
        return new ResponseEntity<UserLogin>(savedUserLogin,HttpStatus.CREATED);
    }
	
}
