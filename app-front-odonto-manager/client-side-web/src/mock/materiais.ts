type Material = {
  id: number;
  codigo: string;
  nome: string;
  quantidade_estoque: number;
  valor_unitario: number;
  dt_ultima_compra: string;
};

const materiais: Material[] = [
  {
    id: 1,
    codigo: "MAT-001",
    nome: "Resina Composta A2",
    quantidade_estoque: 45,
    valor_unitario: 85.0,
    dt_ultima_compra: "2026-03-20T00:00:00",
  },
  {
    id: 2,
    codigo: "MAT-002",
    nome: "Anestésico Lidocaína 2%",
    quantidade_estoque: 120,
    valor_unitario: 12.5,
    dt_ultima_compra: "2026-04-01T00:00:00",
  },
  {
    id: 3,
    codigo: "MAT-003",
    nome: "Luvas de Procedimento (cx 100un)",
    quantidade_estoque: 8,
    valor_unitario: 42.0,
    dt_ultima_compra: "2026-03-10T00:00:00",
  },
  {
    id: 4,
    codigo: "MAT-004",
    nome: "Fio de Sutura Nylon 4-0",
    quantidade_estoque: 30,
    valor_unitario: 18.9,
    dt_ultima_compra: "2026-02-15T00:00:00",
  },
  {
    id: 5,
    codigo: "MAT-005",
    nome: "Broca Diamantada FG 1012",
    quantidade_estoque: 0,
    valor_unitario: 9.5,
    dt_ultima_compra: "2025-12-05T00:00:00",
  },
  {
    id: 6,
    codigo: "MAT-006",
    nome: "Algodão Hidrófilo (pct 500g)",
    quantidade_estoque: 15,
    valor_unitario: 22.0,
    dt_ultima_compra: "2026-03-28T00:00:00",
  },
];

export { materiais };
export type { Material };
