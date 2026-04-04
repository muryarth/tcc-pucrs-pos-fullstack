package com.muryarth.odonto.api_records.controller;

import com.muryarth.odonto.api_records.dto.ProntuarioRequest;
import com.muryarth.odonto.api_records.dto.ProntuarioResponse;
import com.muryarth.odonto.api_records.service.ProntuarioService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/records")
@RequiredArgsConstructor
public class ProntuarioController {

  private final ProntuarioService service;

  @PostMapping
  public ResponseEntity<ProntuarioResponse> create(@Valid @RequestBody ProntuarioRequest request) {
    return ResponseEntity.status(HttpStatus.CREATED).body(service.create(request));
  }

  @GetMapping("/{id}")
  public ResponseEntity<ProntuarioResponse> findById(@PathVariable UUID id) {
    return ResponseEntity.ok(service.findById(id));
  }

  @GetMapping
  public ResponseEntity<List<ProntuarioResponse>> findAll() {
    return ResponseEntity.ok(service.findAll());
  }

  @PutMapping("/{id}")
  public ResponseEntity<ProntuarioResponse> update(@PathVariable UUID id,
      @Valid @RequestBody ProntuarioRequest request) {
    return ResponseEntity.ok(service.update(id, request));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(@PathVariable UUID id) {
    service.delete(id);
    return ResponseEntity.noContent().build();
  }
}
