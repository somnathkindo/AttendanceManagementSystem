package com.attendance.entity.login;

import java.time.LocalDateTime;

import jakarta.persistence.Embedded; 
import jakarta.persistence.Entity; 
import jakarta.persistence.Id; 
import jakarta.persistence.Table; 
import lombok.Data; 
@Data 
@Entity 
@Table(name = "USER_LOG") 
public class UserLog { 
@Id 
private Long logId; 
private String userId; 
private LocalDateTime loginTime; 
private LocalDateTime logoutTime; 
private Double sessionDuration; 
private String token; 
private Integer userLoginStatus; 
@Embedded 
private UserInfo userInfo; 
}