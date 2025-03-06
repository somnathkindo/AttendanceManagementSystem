package com.attendance.entity.login;

import java.util.Date;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long regdId;
    private String firstName;
    private String lastName;
    private String course;
    private String batch;
    private String mail;
    private String mobile;
    private Date dob;
    private String gender;
	
}
