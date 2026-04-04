package com.muryarth.odonto.api_records.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@Table(name = "records", schema = "`odonto-api-records`")
public class Prontuario {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;

  @Column(name = "patient_id", nullable = false)
  private UUID patientId;

  @Column(name = "dentist_id", nullable = false)
  private UUID dentistId;

  @Column(columnDefinition = "TEXT")
  private String description;

  @Column(name = "created_at", updatable = false)
  private LocalDateTime createdAt;

  @Column(name = "modified_at")
  private LocalDateTime modifiedAt;

  @PrePersist
  protected void onCreate() {
    createdAt = LocalDateTime.now();
    modifiedAt = LocalDateTime.now();
  }

  @PreUpdate
  protected void onUpdate() {
    modifiedAt = LocalDateTime.now();
  }
}
