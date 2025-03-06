package com.attendance.entity.login;

import jakarta.persistence.Embedded; 
import jakarta.persistence.Entity; 
import jakarta.persistence.Id; 
import jakarta.persistence.Table; 
import lombok.Data; 
@Entity 
@Data 
@Table(name = "USER_DETAILS") 
public class UserDetails { 
@Id 
private Long addressId; 
private Long userId; 
private String address1; 
private String address2; 
private String state; 
private String dist; 
private String pin; 
private String aadhar; 
private String pan; 
@Embedded 
private UserInfo userInfo; 
}
