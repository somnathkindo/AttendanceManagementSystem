package com.attendance.entity.login;

import lombok.Data;

@Data
public class LoginUser {
	private String mail;
	private String name;
	private String password;
	private String role;
	private Integer status;
}
