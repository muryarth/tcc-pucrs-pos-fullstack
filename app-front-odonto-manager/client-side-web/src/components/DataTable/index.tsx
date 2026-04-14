import { useState, useMemo } from "react";
import "./style.css";

type Column<T> = {
  key: keyof T;
  label: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

type TableAction<T> = {
  label: string;
  icon?: React.ReactNode;
  onClick: (selectedRows: T[]) => void;
};

type DataTableProps<T> = {
  data: T[];
  columns: Column<T>[];
  actions?: TableAction<T>[];
  rowKey: keyof T;
  multiSelect?: boolean;
};

function DataTable<T>({
  data,
  columns,
  actions = [],
  rowKey,
  multiSelect = true,
}: DataTableProps<T>) {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());

  const allKeys = useMemo(
    () => data.map((row) => String(row[rowKey])),
    [data, rowKey],
  );

  const allSelected =
    allKeys.length > 0 && selectedKeys.size === allKeys.length;

  function handleToggleAll() {
    if (allSelected) {
      setSelectedKeys(new Set());
    } else {
      setSelectedKeys(new Set(allKeys));
    }
  }

  function handleToggleRow(key: string) {
    setSelectedKeys((prev) => {
      if (multiSelect) {
        const next = new Set(prev);
        if (next.has(key)) {
          next.delete(key);
        } else {
          next.add(key);
        }
        return next;
      }
      return prev.has(key) ? new Set() : new Set([key]);
    });
  }

  const selectedRows = useMemo(
    () => data.filter((row) => selectedKeys.has(String(row[rowKey]))),
    [data, selectedKeys, rowKey],
  );

  const hasActions = actions.length > 0;
  const hasSelection = selectedKeys.size > 0;

  return (
    <div className="data-table-wrapper">
      {hasActions && (
        <div
          className={`data-table-actions${hasSelection ? "" : " data-table-actions-hidden"}`}
        >
          <span className="data-table-actions-count">
            {selectedKeys.size}{" "}
            {selectedKeys.size === 1
              ? "item selecionado"
              : "itens selecionados"}
          </span>
          <div className="data-table-actions-buttons">
            {actions.map((action) => (
              <button
                key={action.label}
                type="button"
                className="data-table-action-btn"
                onClick={() => action.onClick(selectedRows)}
              >
                {action.icon && (
                  <span className="data-table-action-icon">{action.icon}</span>
                )}
                {action.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="data-table-scroll">
        <table className="data-table">
          <thead>
            <tr>
              {hasActions && (
                <th className="data-table-checkbox-col">
                  {multiSelect && (
                    <input
                      type="checkbox"
                      checked={allSelected}
                      onChange={handleToggleAll}
                    />
                  )}
                </th>
              )}
              {columns.map((col) => (
                <th key={String(col.key)}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (hasActions ? 1 : 0)}
                  className="data-table-empty"
                >
                  Nenhum registro encontrado
                </td>
              </tr>
            ) : (
              data.map((row) => {
                const key = String(row[rowKey]);
                const isSelected = selectedKeys.has(key);

                return (
                  <tr
                    key={key}
                    className={isSelected ? "data-table-row-selected" : ""}
                    onClick={
                      hasActions ? () => handleToggleRow(key) : undefined
                    }
                    style={hasActions ? undefined : { cursor: "default" }}
                  >
                    {hasActions && (
                      <td className="data-table-checkbox-col">
                        <input
                          type={multiSelect ? "checkbox" : "radio"}
                          checked={isSelected}
                          onChange={() => handleToggleRow(key)}
                          onClick={(e) => e.stopPropagation()}
                          name={multiSelect ? undefined : "data-table-select"}
                        />
                      </td>
                    )}
                    {columns.map((col) => (
                      <td key={String(col.key)}>
                        {col.render
                          ? col.render(row[col.key], row)
                          : String(row[col.key] ?? "")}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export { DataTable };
export type { Column, TableAction, DataTableProps };
