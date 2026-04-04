package com.muryarth.odonto.api_records.service;

import com.muryarth.odonto.api_records.dto.ProntuarioRequest;
import com.muryarth.odonto.api_records.dto.ProntuarioResponse;
import com.muryarth.odonto.api_records.model.Prontuario;
import com.muryarth.odonto.api_records.repository.ProntuarioRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProntuarioService {

  private final ProntuarioRepository repository;

  public ProntuarioResponse create(ProntuarioRequest request) {
    Prontuario prontuario = new Prontuario();
    prontuario.setPatientId(request.patientId());
    prontuario.setDentistId(request.dentistId());
    prontuario.setDescription(request.description());
    return ProntuarioResponse.from(repository.save(prontuario));
  }

  public ProntuarioResponse findById(UUID id) {
    return ProntuarioResponse.from(repository.findById(id)
        .orElseThrow(() -> new EntityNotFoundException("Prontuário não encontrado: " + id)));
  }

  public List<ProntuarioResponse> findAll() {
    return repository.findAll().stream().map(ProntuarioResponse::from).toList();
  }

  public ProntuarioResponse update(UUID id, ProntuarioRequest request) {
    Prontuario prontuario = repository.findById(id)
        .orElseThrow(() -> new EntityNotFoundException("Prontuário não encontrado: " + id));
    prontuario.setPatientId(request.patientId());
    prontuario.setDentistId(request.dentistId());
    prontuario.setDescription(request.description());
    return ProntuarioResponse.from(repository.save(prontuario));
  }

  public void delete(UUID id) {
    if (!repository.existsById(id)) {
      throw new EntityNotFoundException("Prontuário não encontrado: " + id);
    }
    repository.deleteById(id);
  }
}
