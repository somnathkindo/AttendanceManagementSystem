package com.attendance.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.attendance.entity.login.UserDetails;
import com.attendance.login.service.UserDetailsService;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class UserDetailsController {
	@Autowired
    private UserDetailsService userDetailsService;

    @PostMapping("/userdetails")
    public ResponseEntity<UserDetails> createUserDetails(@RequestBody UserDetails userDetails) {
        UserDetails savedUserDetails = userDetailsService.saveUserDetails(userDetails);
        return new ResponseEntity<UserDetails>(savedUserDetails,HttpStatus.CREATED);
    }

}
