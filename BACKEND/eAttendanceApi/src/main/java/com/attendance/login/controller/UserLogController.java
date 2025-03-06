package com.attendance.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.attendance.entity.login.UserLog;
import com.attendance.login.service.UserLogService;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class UserLogController {

	@Autowired
    private UserLogService userLogService;

    @PostMapping("/userlog")
    public ResponseEntity<UserLog> createUserLog(@RequestBody UserLog userLog) {
        UserLog savedUserLog = userLogService.saveUserLog(userLog);
        return new ResponseEntity<UserLog>(savedUserLog,HttpStatus.CREATED);
    }

	
}
