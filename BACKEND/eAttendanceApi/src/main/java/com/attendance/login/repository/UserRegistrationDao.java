package com.attendance.login.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.attendance.entity.login.UserRegistration;

public interface UserRegistrationDao extends CrudRepository<UserRegistration, Long> {
    Optional<UserRegistration> findByMail(String mail);
}
