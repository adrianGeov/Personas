package com.personas.personas.service;


import com.personas.personas.entity.Persona;
import com.personas.personas.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaService {

    private final PersonaRepository personaRepository;

@Autowired
    public PersonaService(PersonaRepository personaRepository){
    this.personaRepository = personaRepository;

}

public List<Persona>obtenerTodasLasPersonas(){
    return personaRepository.findAll();

}

    public Persona obtenerPersonaPorId(long id) {
        return personaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Persona no encontrada con id: " + id));
    }


public Persona guardarPersona(Persona persona){
    return personaRepository.save(persona);
}

public void eliminarPersona(long id){
    personaRepository.deleteById(id);
}





}
