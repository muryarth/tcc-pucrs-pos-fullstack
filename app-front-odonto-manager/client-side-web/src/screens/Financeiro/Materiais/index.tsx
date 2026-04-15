import { DataTable } from "../../../components/DataTable";
import type { Column, TableAction } from "../../../components/DataTable";
import { materiais } from "../../../mock/materiais";
import type { Material } from "../../../mock/materiais";
import { dateBR, formatToBRL } from "../../../services";

const columns: Column<Material>[] = [
  { key: "codigo", label: "Código", sortType: "text" },
  { key: "nome", label: "Nome", sortType: "text" },
  { key: "quantidade_estoque", label: "Estoque", sortType: "text" },
  {
    key: "valor_unitario",
    label: "Valor Unitário",
    render: (value) => formatToBRL(Number(value)),
    sortType: "text",
  },
  {
    key: "dt_ultima_compra",
    label: "Última Compra",
    render: (value) => dateBR.format(String(value)),
    sortType: "timestamp",
  },
];

const actions: TableAction<Material>[] = [
  {
    label: "Ver detalhes",
    onClick: (rows) => console.log("Selecionados:", rows),
  },
];

function FinanceiroMateriaisScreen() {
  return (
    <>
      <h5 className="bb-primary fc-primary pb-1">Financeiro - Materiais</h5>
      <DataTable
        data={materiais}
        columns={columns}
        actions={actions}
        multiSelect={false}
        rowKey="id"
      />
    </>
  );
}

export { FinanceiroMateriaisScreen };
