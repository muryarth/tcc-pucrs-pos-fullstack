package com.muryarth.odonto.api_records.dto;

import com.muryarth.odonto.api_records.model.Prontuario;

import java.time.LocalDateTime;
import java.util.UUID;

public record ProntuarioResponse(
    UUID id,
    UUID patientId,
    UUID dentistId,
    String description,
    LocalDateTime createdAt,
    LocalDateTime modifiedAt) {
  public static ProntuarioResponse from(Prontuario prontuario) {
    return new ProntuarioResponse(
        prontuario.getId(),
        prontuario.getPatientId(),
        prontuario.getDentistId(),
        prontuario.getDescription(),
        prontuario.getCreatedAt(),
        prontuario.getModifiedAt());
  }
}
