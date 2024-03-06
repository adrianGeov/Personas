package com.personas.personas.controller;

import com.personas.personas.entity.Persona;
import com.personas.personas.service.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/personas")
public class PersonaController {

private final PersonaService personaService;


@Autowired
    public PersonaController(PersonaService personaService) {
        this.personaService = personaService;
    }


    @GetMapping
    public List <Persona> obtenerTodasLasPersonas(){

        return personaService.obtenerTodasLasPersonas();
    }

    @GetMapping("/{id}")
    public Persona obtenerPersonaPorId(@PathVariable Long id){
        return personaService.obtenerPersonaPorId(id);

    }

    @PostMapping
    public Persona guardarPersona(@RequestBody Persona persona){
        return  personaService.guardarPersona(persona);

    }

    @DeleteMapping("/{id}")
    public void eliminarPersona(@PathVariable Long id){
    personaService.eliminarPersona(id);

    }


}
