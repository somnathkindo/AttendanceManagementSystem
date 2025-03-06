package com.attendance.entity.login;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Embeddable; 
import lombok.Data; 
@Embeddable 
@Data 
public class UserInfo { 
private String createdUser; 
private LocalDateTime createdDate; 
private String modifiedUser; 
private LocalDateTime modifiedDate; 
}