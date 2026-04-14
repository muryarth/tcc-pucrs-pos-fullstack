type Receituario = {
  id: number;
  dt_emissao: string;
  descricao: string;
  paciente_id: number;
  dentista_id: number;
};

const receituarios: Receituario[] = [
  {
    id: 1,
    dt_emissao: "2025-09-10T10:00:00",
    descricao: "Ibuprofeno 600mg - Tomar 1 comprimido a cada 8 horas por 3 dias, em caso de dor.",
    paciente_id: 1,
    dentista_id: 2,
  },
  {
    id: 2,
    dt_emissao: "2025-09-02T09:30:00",
    descricao: "Amoxicilina 500mg - Tomar 1 comprimido a cada 8 horas por 7 dias. Ibuprofeno 400mg - Tomar a cada 6 horas por 3 dias, se necessário.",
    paciente_id: 3,
    dentista_id: 2,
  },
  {
    id: 3,
    dt_emissao: "2026-02-10T16:30:00",
    descricao: "Clorexidina 0,12% - Bochecho 2x ao dia por 7 dias após escovação.",
    paciente_id: 5,
    dentista_id: 3,
  },
];

export { receituarios };
export type { Receituario };
