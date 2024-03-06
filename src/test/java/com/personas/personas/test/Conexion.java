package com.personas.personas.test;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.swing.plaf.synth.SynthOptionPaneUI;
import java.util.List;
import java.util.Map;


@SpringBootTest
public class Conexion {

    //Logger para imprimir mensajes de Registro
    private static final Logger LOGGER = LoggerFactory.getLogger(Conexion.class);
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Test
    public void TestConexion(){

        String sql ="SELECT * FROM PERSONA";
        List<Map<String, Object>> resultado=jdbcTemplate.queryForList(sql);


        for (Map<String, Object> row: resultado){
            for (Map.Entry<String, Object> entrada: row.entrySet()){
                System.out.println(entrada.getKey() + ": " + entrada.getValue());
            }
            System.out.println("---------------------");
        }


   /*
    try{
        jdbcTemplate.execute("SELECT 1");
        LOGGER.info("La conexion a la base de datos fue exitosa!");
    }catch (Exception e){
        LOGGER.error("Error al conectar a las base de datos: ", e.getMessage());
        throw new AssertionError("ERROR al conectar a la base de datos", e);

    }

*/

    }






}
