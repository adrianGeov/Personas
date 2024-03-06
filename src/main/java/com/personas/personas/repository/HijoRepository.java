package com.personas.personas.repository;

import com.personas.personas.entity.Hijo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HijoRepository extends JpaRepository <Hijo, Long> {

}
