package com.muryarth.odonto.api_records.repository;

import com.muryarth.odonto.api_records.model.Prontuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ProntuarioRepository extends JpaRepository<Prontuario, UUID> {
}
