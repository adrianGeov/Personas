package com.personas.personas.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "hijo")
public class Hijo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_hijo;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "edad")
    private int edad;

/*
    Indica la Relación entre Hijo  y Persona "de muchos a uno", un Hijo puede tener solo una Persona, pero una
    Persona puede tener muchos Hijos

 */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_persona", nullable = false)
    private Persona persona;



    public long getId_hijo() {
        return id_hijo;
    }

    public void setId_hijo(long id_hijo) {
        this.id_hijo = id_hijo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }
}
