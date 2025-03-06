package com.attendance.entity.login;

import java.util.Date;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "USER_REGISTRATION")
public class UserRegistration {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long regdId;
    private String userId;
    private String firstName;
    private String lastName;
    private String mail;
    private String mobile;
    private Date dob;
    private String gender;
    private String role;
    private String password;
    
    @Embedded
    private UserInfo userInfo;
}
