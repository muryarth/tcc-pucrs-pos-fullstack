package com.muryarth.odonto.api_records;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.sql.DataSource;
import java.sql.Connection;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
class DatabaseConnectionTest {

  @Autowired
  private DataSource dataSource;

  // Testa a integração com postgreSQL, verificando se a conexão é estabelecida corretamente
  // Evita builds desnecessários em caso de falha na conexão com o banco de dados
  @Test
  void shouldConnectToDatabase() throws Exception {
    assertNotNull(dataSource, "DataSource não deve ser nulo");
    try (Connection connection = dataSource.getConnection()) {
      assertFalse(connection.isClosed(), "Conexão com o banco deve estar aberta");
    }
  }
}
