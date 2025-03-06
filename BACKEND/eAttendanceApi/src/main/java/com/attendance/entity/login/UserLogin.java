package com.attendance.entity.login;

import jakarta.persistence.Embedded; 
import jakarta.persistence.Entity; 
import jakarta.persistence.Id; 
import jakarta.persistence.Table; 
import lombok.Data; 
@Entity 
@Data 
@Table(name = "USER_LOGIN") 
public class UserLogin { 
@Id 
private Long userId;
private String mail;  
private String password;  
private Integer status; 
private String role; 
private String privilege; 
@Embedded 
private UserInfo userInfo; 
}
