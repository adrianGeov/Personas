package com.personas.personas.repository;

import com.personas.personas.entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Map;

@Repository
public interface PersonaRepository extends JpaRepository <Persona, Long> {

}
