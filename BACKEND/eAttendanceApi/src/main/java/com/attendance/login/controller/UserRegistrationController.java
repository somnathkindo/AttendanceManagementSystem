package com.attendance.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.attendance.entity.login.UserRegistration;
import com.attendance.login.service.UserRegistrationService;

import jakarta.transaction.Transactional;

@CrossOrigin(origins = "http://localhost:4200")

@Transactional
@RestController
public class UserRegistrationController {

	@Autowired
    private UserRegistrationService userRegistrationService;

    @PostMapping("/userregistration")
    public ResponseEntity<UserRegistration> createUserRegistration(@RequestBody UserRegistration userRegistration) {
        UserRegistration savedUserRegistration = userRegistrationService.saveUserRegistration(userRegistration);
        return new ResponseEntity<UserRegistration>(savedUserRegistration,HttpStatus.CREATED);
    }
	
}
