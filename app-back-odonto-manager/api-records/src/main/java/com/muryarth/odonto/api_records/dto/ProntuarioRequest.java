package com.muryarth.odonto.api_records.dto;

import jakarta.validation.constraints.NotNull;

import java.util.UUID;

public record ProntuarioRequest(
    @NotNull UUID patientId,
    @NotNull UUID dentistId,
    String description) {
}
