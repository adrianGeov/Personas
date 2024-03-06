package com.personas.personas.entity;

import jakarta.persistence.*;
import org.intellij.lang.annotations.Pattern;


import java.util.Date;
import java.util.List;

@Entity
@Table(name = "persona")
public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_persona;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido_paterno")
    private String apellido_paterno;

    @Column(name = "apellido_materno")
    private String apellido_materno;

    @Column(name = "anio_nacimiento")
    @Temporal(TemporalType.DATE)
    private Date anio_nacimiento;

    @Column(name = "direccion")
    private String direccion;

    @Column(name = "telefono")
    private String telefono;


    @Column(name = "correo")
    private String correo;

    @Column(name = "edad")
    private int edad;


    @OneToMany(mappedBy = "persona", cascade =CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Hijo> hijos;



    public long getId_persona() {
        return id_persona;
    }

    public void setId_persona(long  id_persona) {
        this.id_persona = id_persona;
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

    public String getApellido_paterno() {
        return apellido_paterno;
    }

    public void setApellido_paterno(String apellido_paterno) {
        this.apellido_paterno = apellido_paterno;
    }

    public String getApellido_materno() {
        return apellido_materno;
    }

    public void setApellido_materno(String apellido_materno) {
        this.apellido_materno = apellido_materno;
    }

    public Date getAnio_nacimiento() {
        return anio_nacimiento;
    }

    public void setAnio_nacimiento(Date anio_nacimiento) {
        this.anio_nacimiento = anio_nacimiento;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }
}
